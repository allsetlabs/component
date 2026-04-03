import type { Meta, StoryObj } from '@storybook/react-vite';
import { OpenIn, OpenInTrigger, OpenInContent, OpenInChatGPT, OpenInClaude } from './open-in-chat';

const meta = {
  title: 'AI Elements/OpenInChat',
  component: OpenIn,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <OpenIn query="Explain how React hooks work">
      <OpenInTrigger />
      <OpenInContent>
        <OpenInChatGPT />
        <OpenInClaude />
      </OpenInContent>
    </OpenIn>
  ),
};

export const LongPrompt: Story = {
  render: () => (
    <OpenIn query="Can you provide a detailed explanation of how the JavaScript event loop works, including the call stack, task queue, and microtask queue?">
      <OpenInTrigger />
      <OpenInContent>
        <OpenInChatGPT />
        <OpenInClaude />
      </OpenInContent>
    </OpenIn>
  ),
};
