import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageCircleIcon } from 'lucide-react';
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
  ConversationDownload,
} from './conversation';
import { Message, MessageContent } from './message';

const meta = {
  title: 'AI Elements/Conversation',
  component: Conversation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const mockMessages = [
  { role: 'user' as const, content: 'Hello, how are you?' },
  { role: 'assistant' as const, content: 'I am doing well, thank you for asking!' },
  { role: 'user' as const, content: 'Can you help me with something?' },
  { role: 'assistant' as const, content: 'Of course! What do you need help with?' },
];

export const Default: Story = {
  render: () => (
    <div className="h-96">
      <Conversation>
        <ConversationContent>
          {mockMessages.map((msg, i) => (
            <Message key={i} from={msg.role}>
              <MessageContent>{msg.content}</MessageContent>
            </Message>
          ))}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
    </div>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <div className="h-96">
      <Conversation>
        <ConversationEmptyState icon={<MessageCircleIcon className="size-8" />} />
      </Conversation>
    </div>
  ),
};

export const WithDownload: Story = {
  render: () => (
    <div className="h-96">
      <Conversation>
        <ConversationContent>
          {mockMessages.map((msg, i) => (
            <Message key={i} from={msg.role}>
              <MessageContent>{msg.content}</MessageContent>
            </Message>
          ))}
        </ConversationContent>
        <ConversationDownload messages={mockMessages} />
        <ConversationScrollButton />
      </Conversation>
    </div>
  ),
};
