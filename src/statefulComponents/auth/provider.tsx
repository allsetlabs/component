import { useState, useEffect, ReactNode } from 'react';
import { AuthContext, AuthContextType } from './context';
import { AuthUser, AuthTokenResponse } from '../../types/auth';

/**
 * Message types for extension communication
 */
const EXTENSION_AUTH_MESSAGE_TYPES = {
  LOGIN: 'SEEKR_AUTH_LOGIN',
  LOGOUT: 'SEEKR_AUTH_LOGOUT',
} as const;

/**
 * Auth provider props
 */
interface AuthProviderProps {
  /** Child components that will have access to auth context */
  children: ReactNode;
  /**
   * Optional custom storage keys for localStorage
   * Allows different modules to use different keys if needed
   */
  storageKeys?: {
    /** Key for storing auth token (default: 'auth_token') */
    token: string;
    /** Key for storing user data (default: 'auth_user') */
    user: string;
  };
  /**
   * Enable extension bridge mode to send postMessage events
   * for extension content scripts to listen to
   */
  enableExtensionBridge?: boolean;
}

/**
 * Default storage keys for auth data
 */
const DEFAULT_STORAGE_KEYS = {
  token: 'auth_token',
  user: 'auth_user',
};

/**
 * Send a message to the extension content script via postMessage
 */
function sendExtensionMessage(
  type: (typeof EXTENSION_AUTH_MESSAGE_TYPES)[keyof typeof EXTENSION_AUTH_MESSAGE_TYPES],
  payload?: { token: string; user: AuthUser }
): void {
  if (typeof window === 'undefined') return;

  window.postMessage(
    {
      type,
      payload,
    },
    window.location.origin
  );
}

/**
 * Auth provider component
 * Manages authentication state and provides auth methods to the component tree
 *
 * @example
 * ```tsx
 * // Basic usage with default storage keys
 * <AuthProvider>
 *   <App />
 * </AuthProvider>
 *
 * // With custom storage keys
 * <AuthProvider storageKeys={{ token: 'myapp_token', user: 'myapp_user' }}>
 *   <App />
 * </AuthProvider>
 *
 * // With extension bridge enabled (for web app that syncs with extension)
 * <AuthProvider enableExtensionBridge>
 *   <App />
 * </AuthProvider>
 * ```
 */
export function AuthProvider({
  children,
  storageKeys = DEFAULT_STORAGE_KEYS,
  enableExtensionBridge = false,
}: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Merge custom storage keys with defaults
  const keys = { ...DEFAULT_STORAGE_KEYS, ...storageKeys };

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof window === 'undefined') {
          setIsLoading(false);
          return;
        }

        const storedToken = localStorage.getItem(keys.token);
        const storedUser = localStorage.getItem(keys.user);

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));

          sendExtensionMessage(EXTENSION_AUTH_MESSAGE_TYPES.LOGIN, {
            token: storedToken,
            user: JSON.parse(storedUser),
          });
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        // Clear potentially corrupted data
        localStorage.removeItem(keys.token);
        localStorage.removeItem(keys.user);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [keys.token, keys.user]);

  /**
   * Login method
   * Sets user and token state and persists to localStorage
   * If extension bridge is enabled, sends postMessage to extension content script
   */
  const login = (tokenResponse: AuthTokenResponse): void => {
    setToken(tokenResponse.access_token);
    setUser(tokenResponse.user);
    localStorage.setItem(keys.token, tokenResponse.access_token);
    localStorage.setItem(keys.user, JSON.stringify(tokenResponse.user));

    // Notify extension content script of login
    if (enableExtensionBridge) {
      sendExtensionMessage(EXTENSION_AUTH_MESSAGE_TYPES.LOGIN, {
        token: tokenResponse.access_token,
        user: tokenResponse.user,
      });
    }
  };

  /**
   * Logout method
   * Clears user and token state and removes from localStorage
   * If extension bridge is enabled, sends postMessage to extension content script
   */
  const logout = (): void => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(keys.token);
    localStorage.removeItem(keys.user);

    // Notify extension content script of logout
    if (enableExtensionBridge) {
      sendExtensionMessage(EXTENSION_AUTH_MESSAGE_TYPES.LOGOUT);
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated: !!user && !!token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
