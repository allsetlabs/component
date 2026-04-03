import { useState, useEffect, useCallback, ReactNode } from 'react';
import { ExtensionAuthContext, ExtensionAuthContextType } from './context';
import { AuthUser } from '../../types/auth';

/**
 * Storage keys for extension auth data in chrome.storage.local
 */
const STORAGE_KEYS = {
  token: 'seekr_auth_token',
  user: 'seekr_auth_user',
};

/**
 * Extension Auth provider props
 */
interface ExtensionAuthProviderProps {
  /** Child components that will have access to extension auth context */
  children: ReactNode;
}

/**
 * Get auth data from chrome.storage.local
 * Returns null values if chrome.storage is not available or data not found
 */
async function getAuthFromStorage(): Promise<{ token: string | null; user: AuthUser | null }> {
  // Check if chrome.storage is available (extension context)
  if (typeof chrome === 'undefined' || !chrome.storage?.local) {
    console.warn('[ExtensionAuthProvider] chrome.storage.local is not available');
    return { token: null, user: null };
  }

  return new Promise((resolve) => {
    chrome.storage.local.get([STORAGE_KEYS.token, STORAGE_KEYS.user], (result) => {
      const token = result[STORAGE_KEYS.token] || null;
      const user = result[STORAGE_KEYS.user] || null;
      resolve({ token, user });
    });
  });
}

/**
 * ExtensionAuthProvider component
 *
 * Provides authentication state from chrome.storage.local to the extension.
 * This provider is designed specifically for Chrome extensions that receive
 * auth data from the webapp via postMessage and content scripts.
 *
 * The webapp stores auth data in chrome.storage.local via the authBridge
 * content script, and this provider reads and provides that data to the
 * extension popup and content scripts.
 *
 * @example
 * ```tsx
 * // In extension popup or page
 * function App() {
 *   return (
 *     <ExtensionAuthProvider>
 *       <PopupContent />
 *     </ExtensionAuthProvider>
 *   );
 * }
 *
 * function PopupContent() {
 *   const { user, isAuthenticated, isLoading } = useExtensionAuth();
 *
 *   if (isLoading) return <Loading />;
 *   if (!isAuthenticated) return <LoginPrompt />;
 *   return <MainContent user={user} />;
 * }
 * ```
 */
export function ExtensionAuthProvider({ children }: ExtensionAuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Load auth data from chrome.storage.local
   */
  const loadAuth = useCallback(async () => {
    setIsLoading(true);
    try {
      const { token: storedToken, user: storedUser } = await getAuthFromStorage();
      setToken(storedToken);
      setUser(storedUser);
    } catch (error) {
      console.error('[ExtensionAuthProvider] Error loading auth:', error);
      setToken(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load auth on mount
  useEffect(() => {
    loadAuth();
  }, [loadAuth]);

  // Listen for changes in chrome.storage.local
  useEffect(() => {
    if (typeof chrome === 'undefined' || !chrome.storage?.onChanged) {
      return;
    }

    const handleStorageChange = (
      changes: { [key: string]: chrome.storage.StorageChange },
      areaName: string
    ) => {
      if (areaName !== 'local') return;

      // Check if our auth keys changed
      if (STORAGE_KEYS.token in changes || STORAGE_KEYS.user in changes) {
        loadAuth();
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);

    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, [loadAuth]);

  const value: ExtensionAuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated: !!user && !!token,
    refreshAuth: loadAuth,
  };

  return <ExtensionAuthContext.Provider value={value}>{children}</ExtensionAuthContext.Provider>;
}
