import type { Meta, StoryObj } from '@storybook/react-vite';
import { CopyIcon, ThumbsUpIcon } from 'lucide-react';
import { Message, MessageContent, MessageResponse, MessageActions, MessageAction } from './message';

const meta = {
  title: 'AI Elements/Message',
  component: Message,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const sampleMarkdown = `Here's a simple example:

\`\`\`typescript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

This demonstrates basic TypeScript syntax.`;

export const UserMessage: Story = {
  render: () => (
    <Message from="user">
      <MessageContent>How do I write a TypeScript function?</MessageContent>
    </Message>
  ),
};

export const AssistantMessage: Story = {
  render: () => (
    <Message from="assistant">
      <MessageContent>
        <MessageResponse>{sampleMarkdown}</MessageResponse>
      </MessageContent>
      <MessageActions>
        <MessageAction tooltip="Copy message">
          <CopyIcon className="size-4" />
        </MessageAction>
        <MessageAction tooltip="Good response">
          <ThumbsUpIcon className="size-4" />
        </MessageAction>
      </MessageActions>
    </Message>
  ),
};

export const LongAssistantMessage: Story = {
  render: () => (
    <Message from="assistant">
      <MessageContent>
        <MessageResponse>
          {`# Understanding React Hooks

React Hooks are functions that let you "hook into" React features from function components.

## Common Hooks

1. **useState** - Adds state to functional components
2. **useEffect** - Performs side effects
3. **useContext** - Accesses context values
4. **useRef** - Creates mutable refs

Here's an example:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

This is a simple counter component using the useState hook.`}
        </MessageResponse>
      </MessageContent>
    </Message>
  ),
};
