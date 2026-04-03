import { createContext, useContext } from 'react';
import { AuthUser } from '../../types/auth';

/**
 * Extension authentication context type
 * Designed for Chrome extensions that read auth from chrome.storage.local
 */
export interface ExtensionAuthContextType {
  /** Currently authenticated user, null if not authenticated */
  user: AuthUser | null;
  /** Current access token, null if not authenticated */
  token: string | null;
  /** Whether authentication state is being loaded from chrome.storage.local */
  isLoading: boolean;
  /** Derived state: true if both user and token are present */
  isAuthenticated: boolean;
  /** Force refresh auth state from chrome.storage.local */
  refreshAuth: () => Promise<void>;
}

/**
 * Extension Auth context
 * Provides authentication state from chrome.storage.local throughout the extension
 */
export const ExtensionAuthContext = createContext<ExtensionAuthContextType | undefined>(undefined);

/**
 * Custom hook to access extension auth context
 * Must be used within an ExtensionAuthProvider
 *
 * @throws {Error} If used outside of ExtensionAuthProvider
 * @returns {ExtensionAuthContextType} Extension auth context value
 *
 * @example
 * ```tsx
 * function PopupComponent() {
 *   const { user, isAuthenticated, isLoading } = useExtensionAuth();
 *
 *   if (isLoading) {
 *     return <Loading />;
 *   }
 *
 *   if (!isAuthenticated) {
 *     return <LoginPrompt />;
 *   }
 *
 *   return <div>Welcome, {user?.name}!</div>;
 * }
 * ```
 */
export function useExtensionAuth(): ExtensionAuthContextType {
  const context = useContext(ExtensionAuthContext);
  if (context === undefined) {
    throw new Error('useExtensionAuth must be used within an ExtensionAuthProvider');
  }
  return context;
}
