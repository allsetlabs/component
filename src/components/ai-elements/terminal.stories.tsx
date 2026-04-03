import type { Meta, StoryObj } from '@storybook/react-vite';
import { Terminal } from './terminal';

const meta = {
  title: 'AI Elements/Terminal',
  component: Terminal,
  tags: ['autodocs'],
} satisfies Meta<typeof Terminal>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOutput = `$ npm install
added 142 packages in 3.2s

$ npm run build
Building...
✓ Build complete`;

export const Default: Story = {
  args: {
    output: sampleOutput,
  },
};

export const Streaming: Story = {
  args: {
    output: '$ running command...\nProcessing',
    isStreaming: true,
  },
};

export const WithClear: Story = {
  args: {
    output: sampleOutput,
    onClear: () => console.log('Clear clicked'),
  },
};

export const WithAnsiColors: Story = {
  args: {
    output: '\x1b[32mSuccess:\x1b[0m Operation completed\n\x1b[31mError:\x1b[0m Something failed',
  },
};
