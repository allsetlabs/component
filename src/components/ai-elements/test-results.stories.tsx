import type { Meta, StoryObj } from '@storybook/react-vite';
import { TestResults } from './test-results';

const meta = {
  title: 'AI Elements/TestResults',
  component: TestResults,
  tags: ['autodocs'],
} satisfies Meta<typeof TestResults>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockResults = {
  passed: 15,
  failed: 2,
  skipped: 1,
  total: 18,
  tests: [
    { name: 'should render correctly', status: 'passed' as const },
    { name: 'should handle click events', status: 'passed' as const },
    {
      name: 'should validate props',
      status: 'failed' as const,
      error: 'Expected true but got false',
    },
    { name: 'should update state', status: 'passed' as const },
    { name: 'performance test', status: 'skipped' as const },
  ],
};

export const Default: Story = {
  args: {
    summary: mockResults,
  },
};

export const AllPassed: Story = {
  args: {
    summary: {
      passed: 20,
      failed: 0,
      skipped: 0,
      total: 20,
    },
  },
};

export const WithFailures: Story = {
  args: {
    summary: {
      passed: 10,
      failed: 5,
      skipped: 2,
      total: 17,
    },
  },
};
