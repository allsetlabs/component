import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthLogin } from './auth-login';
import { GoogleOAuthProvider } from '@react-oauth/google';

const meta = {
  title: 'Auth/AuthLogin',
  component: AuthLogin,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GoogleOAuthProvider clientId="demo-client-id">
        <Story />
      </GoogleOAuthProvider>
    ),
  ],
} satisfies Meta<typeof AuthLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'My App',
    description: 'Sign in to get started',
    onSuccessLogin: (credential: string) => console.log('Login success:', credential),
    onError: (error: Error) => console.error('Login error:', error),
    provider: 'google',
  },
};

export const CustomBranding: Story = {
  args: {
    title: 'Seekr',
    description: 'Your AI-powered resume builder',
    onSuccessLogin: (credential: string) => console.log('Login success:', credential),
    provider: 'google',
  },
};

export const UnsupportedProvider: Story = {
  args: {
    title: 'My App',
    description: 'Sign in to get started',
    onSuccessLogin: (credential: string) => console.log('Login success:', credential),
    provider: 'github',
  },
};
