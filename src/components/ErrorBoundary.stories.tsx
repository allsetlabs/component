import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorBoundary } from './ErrorBoundary';

const meta = {
  title: 'Utility/ErrorBoundary',
  component: ErrorBoundary,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ErrorBoundary isDev={true}>
      <div className="rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Normal Content</h2>
        <p className="text-muted-foreground">
          This content is wrapped in an ErrorBoundary but displays normally since there is no error.
        </p>
      </div>
    </ErrorBoundary>
  ),
};

const ThrowError = () => {
  throw new Error('This is a simulated error for testing ErrorBoundary');
};

export const WithError: Story = {
  render: () => (
    <ErrorBoundary isDev={true}>
      <ThrowError />
    </ErrorBoundary>
  ),
};
