import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
} from './prompt-input';

const meta = {
  title: 'AI Elements/PromptInput',
  component: PromptInput,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PromptInput onSubmit={(message) => console.log(message)}>
      <PromptInputTextarea />
      <PromptInputFooter>
        <div />
        <PromptInputSubmit />
      </PromptInputFooter>
    </PromptInput>
  ),
};

export const WithAttachments: Story = {
  render: () => (
    <PromptInput onSubmit={(message) => console.log(message)} accept="image/*" multiple>
      <PromptInputTextarea placeholder="Type a message or attach files..." />
      <PromptInputFooter>
        <div />
        <PromptInputSubmit />
      </PromptInputFooter>
    </PromptInput>
  ),
};
