/**
 * Generic auth types for use across all Seekr modules.
 * These types are intentionally extensible to allow each module
 * (web, desktop, mobile, extension) to add provider-specific fields.
 */

/**
 * Generic user interface with extensible fields.
 * Modules can extend this interface to add provider-specific properties.
 *
 * @example
 * ```typescript
 * // In a specific module that needs Google-specific fields:
 * interface GoogleAuthUser extends AuthUser {
 *   picture?: string;
 *   given_name?: string;
 *   family_name?: string;
 * }
 * ```
 */
export interface AuthUser {
  /** Unique user identifier (string or number for flexibility) */
  id: string | number;
  /** User email address */
  email: string;
  /** Optional display name */
  name?: string;
  /** Allow modules to extend with provider-specific fields */
  [key: string]: unknown;
}

/**
 * Generic token response interface.
 * Returned by authentication endpoints.
 *
 * @example
 * ```typescript
 * // In a specific module:
 * interface OAuth2TokenResponse extends AuthTokenResponse {
 *   scope?: string;
 *   refresh_token?: string;
 * }
 * ```
 */
export interface AuthTokenResponse {
  /** OAuth 2.0 access token */
  access_token: string;
  /** Token type (usually "Bearer") */
  token_type: string;
  /** Authenticated user information */
  user: AuthUser;
  /** Optional token expiration time in seconds */
  expires_in?: number;
  /** Allow modules to extend with provider-specific fields */
  [key: string]: unknown;
}

/**
 * Generic authentication error response.
 * Used to provide consistent error handling across modules.
 */
export interface AuthErrorResponse {
  /** Error code or identifier */
  error: string;
  /** Human-readable error description */
  error_description?: string;
  /** Optional error URI for more information */
  error_uri?: string;
  /** Allow modules to extend with provider-specific error fields */
  [key: string]: unknown;
}

/**
 * Generic authentication context state.
 * Represents the current authentication state across the application.
 */
export interface AuthState {
  /** Current authenticated user, null if not authenticated */
  user: AuthUser | null;
  /** Current access token, null if not authenticated */
  accessToken: string | null;
  /** Whether authentication is in progress */
  isLoading: boolean;
  /** Current authentication error, null if no error */
  error: AuthErrorResponse | null;
  /** Whether user is authenticated */
  isAuthenticated: boolean;
}

/**
 * Generic authentication provider configuration.
 * Used to configure auth providers across modules.
 */
export interface AuthProviderConfig {
  /** Provider identifier (e.g., "google", "github") */
  provider: string;
  /** OAuth client ID */
  clientId: string;
  /** Optional OAuth redirect URI */
  redirectUri?: string;
  /** Optional authentication scopes */
  scopes?: string[];
  /** Allow modules to extend with provider-specific config */
  [key: string]: unknown;
}

/**
 * Generic authentication service interface.
 * Implemented by modules that provide authentication functionality.
 */
export interface IAuthService {
  /** Authenticate user with credentials or OAuth */
  authenticate(config: AuthProviderConfig): Promise<AuthTokenResponse>;
  /** Logout current user */
  logout(): Promise<void>;
  /** Refresh access token */
  refreshToken(refreshToken: string): Promise<AuthTokenResponse>;
  /** Get current authenticated user */
  getCurrentUser(): Promise<AuthUser | null>;
  /** Validate if current token is still valid */
  isTokenValid(): boolean;
}

/**
 * Email login request payload for password-based authentication.
 */
export interface EmailLoginRequest {
  /** User email address */
  email: string;
  /** User password */
  password: string;
}

/**
 * Email signup request payload for creating new accounts.
 */
export interface EmailSignupRequest {
  /** User email address */
  email: string;
  /** User password */
  password: string;
  /** User display name */
  name: string;
}

/**
 * Authentication method types supported by the auth system.
 */
export type AuthMethod = 'google' | 'email';
