import type { LanguageModelUsage } from 'ai';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Context,
  ContextTrigger,
  ContextContent,
  ContextContentHeader,
  ContextContentBody,
  ContextContentFooter,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextCacheUsage,
} from './context';

const meta = {
  title: 'AI Elements/Context',
  component: Context,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const mockUsage = {
  inputTokens: 1250,
  outputTokens: 384,
  totalTokens: 1634,
} as LanguageModelUsage;

export const Default: Story = {
  render: () => (
    <Context usedTokens={15000} maxTokens={200000} usage={mockUsage} modelId="claude-opus-4">
      <ContextTrigger />
      <ContextContent>
        <ContextContentHeader />
        <ContextContentBody>
          <div className="space-y-2">
            <ContextInputUsage />
            <ContextOutputUsage />
          </div>
        </ContextContentBody>
        <ContextContentFooter />
      </ContextContent>
    </Context>
  ),
};

export const HighUsage: Story = {
  render: () => (
    <Context usedTokens={180000} maxTokens={200000} usage={mockUsage} modelId="claude-opus-4">
      <ContextTrigger />
      <ContextContent>
        <ContextContentHeader />
        <ContextContentBody>
          <div className="space-y-2">
            <ContextInputUsage />
            <ContextOutputUsage />
          </div>
        </ContextContentBody>
        <ContextContentFooter />
      </ContextContent>
    </Context>
  ),
};

export const WithReasoning: Story = {
  render: () => (
    <Context
      usedTokens={25000}
      maxTokens={200000}
      usage={{ ...mockUsage, reasoningTokens: 5000 } as LanguageModelUsage}
      modelId="claude-opus-4"
    >
      <ContextTrigger />
      <ContextContent>
        <ContextContentHeader />
        <ContextContentBody>
          <div className="space-y-2">
            <ContextInputUsage />
            <ContextOutputUsage />
            <ContextReasoningUsage />
          </div>
        </ContextContentBody>
        <ContextContentFooter />
      </ContextContent>
    </Context>
  ),
};

export const WithCache: Story = {
  render: () => (
    <Context
      usedTokens={20000}
      maxTokens={200000}
      usage={{ ...mockUsage, cachedInputTokens: 8000 } as LanguageModelUsage}
      modelId="claude-opus-4"
    >
      <ContextTrigger />
      <ContextContent>
        <ContextContentHeader />
        <ContextContentBody>
          <div className="space-y-2">
            <ContextInputUsage />
            <ContextOutputUsage />
            <ContextCacheUsage />
          </div>
        </ContextContentBody>
        <ContextContentFooter />
      </ContextContent>
    </Context>
  ),
};
