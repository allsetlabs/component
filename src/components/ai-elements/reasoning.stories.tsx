import type { Meta, StoryObj } from '@storybook/react-vite';
import { Reasoning, ReasoningContent, ReasoningTrigger } from './reasoning';

const meta = {
  title: 'AI Elements/Reasoning',
  component: Reasoning,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Collapsible reasoning/thinking block that auto-opens during streaming and auto-closes when complete. Displays AI reasoning steps with markdown support.',
      },
    },
  },
} satisfies Meta<typeof Reasoning>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleReasoning = `Let me think through this step by step.

1. First, I need to analyze the requirements
2. Then consider the relationships between components
3. Finally, recommend the best solution`;

export const Default: Story = {
  render: () => (
    <Reasoning defaultOpen>
      <ReasoningTrigger />
      <ReasoningContent>{sampleReasoning}</ReasoningContent>
    </Reasoning>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Reasoning defaultOpen={false} duration={5}>
      <ReasoningTrigger />
      <ReasoningContent>{sampleReasoning}</ReasoningContent>
    </Reasoning>
  ),
};

export const Streaming: Story = {
  render: () => (
    <Reasoning isStreaming open>
      <ReasoningTrigger />
      <ReasoningContent>
        Analyzing the problem space and considering multiple approaches...
      </ReasoningContent>
    </Reasoning>
  ),
};

export const WithDuration: Story = {
  render: () => (
    <Reasoning defaultOpen={false} duration={12}>
      <ReasoningTrigger />
      <ReasoningContent>
        {`After careful analysis:

- The optimal data structure is a balanced BST
- Time complexity: O(log n)
- Space complexity: O(n)`}
      </ReasoningContent>
    </Reasoning>
  ),
};

export const CustomThinkingMessage: Story = {
  render: () => (
    <Reasoning defaultOpen={false} duration={8}>
      <ReasoningTrigger
        getThinkingMessage={(isStreaming, duration) => {
          if (isStreaming) return <span>Processing...</span>;
          return <span>Analyzed for {duration ?? 'a few'} seconds</span>;
        }}
      />
      <ReasoningContent>{sampleReasoning}</ReasoningContent>
    </Reasoning>
  ),
};
