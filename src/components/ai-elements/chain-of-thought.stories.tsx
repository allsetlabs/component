import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckCircleIcon, SearchIcon } from 'lucide-react';
import {
  ChainOfThought,
  ChainOfThoughtHeader,
  ChainOfThoughtContent,
  ChainOfThoughtStep,
  ChainOfThoughtSearchResults,
  ChainOfThoughtSearchResult,
  ChainOfThoughtImage,
} from './chain-of-thought';

const meta = {
  title: 'AI Elements/ChainOfThought',
  component: ChainOfThought,
  tags: ['autodocs'],
} satisfies Meta<typeof ChainOfThought>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ChainOfThought defaultOpen>
      <ChainOfThoughtHeader />
      <ChainOfThoughtContent>
        <ChainOfThoughtStep
          icon={SearchIcon}
          label="Analyzing the question"
          status="complete"
          description="Understanding user intent and extracting key requirements"
        />
        <ChainOfThoughtStep
          icon={SearchIcon}
          label="Searching knowledge base"
          status="complete"
          description="Found 5 relevant documents"
        >
          <ChainOfThoughtSearchResults>
            <ChainOfThoughtSearchResult>api-docs.md</ChainOfThoughtSearchResult>
            <ChainOfThoughtSearchResult>guide.md</ChainOfThoughtSearchResult>
            <ChainOfThoughtSearchResult>examples.md</ChainOfThoughtSearchResult>
          </ChainOfThoughtSearchResults>
        </ChainOfThoughtStep>
        <ChainOfThoughtStep
          icon={CheckCircleIcon}
          label="Formulating response"
          status="active"
          description="Synthesizing information into coherent answer"
        />
      </ChainOfThoughtContent>
    </ChainOfThought>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <ChainOfThought defaultOpen={false}>
      <ChainOfThoughtHeader>Thinking process</ChainOfThoughtHeader>
      <ChainOfThoughtContent>
        <ChainOfThoughtStep label="Step 1" status="complete" />
        <ChainOfThoughtStep label="Step 2" status="complete" />
      </ChainOfThoughtContent>
    </ChainOfThought>
  ),
};

export const WithImage: Story = {
  render: () => (
    <ChainOfThought defaultOpen>
      <ChainOfThoughtHeader />
      <ChainOfThoughtContent>
        <ChainOfThoughtStep label="Analyzing image" status="complete">
          <ChainOfThoughtImage caption="Detected: Cat sitting on a laptop">
            <img src="https://via.placeholder.com/300x200" alt="Example" className="max-w-full" />
          </ChainOfThoughtImage>
        </ChainOfThoughtStep>
      </ChainOfThoughtContent>
    </ChainOfThought>
  ),
};
