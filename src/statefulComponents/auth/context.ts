import { createContext, useContext } from 'react';
import { AuthUser, AuthTokenResponse } from '../../types/auth';

/**
 * Authentication context type
 * Defines the shape of the auth context available to consumers
 */
export interface AuthContextType {
  /** Currently authenticated user, null if not authenticated */
  user: AuthUser | null;
  /** Current access token, null if not authenticated */
  token: string | null;
  /** Whether authentication state is being initialized */
  isLoading: boolean;
  /** Derived state: true if both user and token are present */
  isAuthenticated: boolean;
  /** Login method to set user and token from auth response */
  login: (tokenResponse: AuthTokenResponse) => void;
  /** Logout method to clear user and token */
  logout: () => void;
}

/**
 * Auth context
 * Provides authentication state and methods throughout the component tree
 */
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Custom hook to access auth context
 * Must be used within an AuthProvider
 *
 * @throws {Error} If used outside of AuthProvider
 * @returns {AuthContextType} Auth context value
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { user, isAuthenticated, login, logout } = useAuth();
 *
 *   if (!isAuthenticated) {
 *     return <LoginButton onClick={() => login(response)} />;
 *   }
 *
 *   return <div>Welcome, {user?.name}!</div>;
 * }
 * ```
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
