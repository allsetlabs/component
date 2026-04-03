import type { Meta, StoryObj } from '@storybook/react-vite';
import { Suggestions, Suggestion } from './suggestion';

const meta = {
  title: 'AI Elements/Suggestion',
  component: Suggestions,
  tags: ['autodocs'],
} satisfies Meta<typeof Suggestions>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSuggestions = [
  'What is TypeScript?',
  'How do I use React Hooks?',
  'Explain async/await',
  'What is a closure?',
];

export const Default: Story = {
  render: () => (
    <Suggestions>
      {sampleSuggestions.map((suggestion) => (
        <Suggestion
          key={suggestion}
          suggestion={suggestion}
          onClick={(s) => console.log('Clicked:', s)}
        />
      ))}
    </Suggestions>
  ),
};

export const SingleSuggestion: Story = {
  render: () => (
    <Suggestions>
      <Suggestion
        suggestion="Try asking me a question"
        onClick={(s) => console.log('Clicked:', s)}
      />
    </Suggestions>
  ),
};

export const LongSuggestions: Story = {
  render: () => (
    <Suggestions>
      <Suggestion
        suggestion="Can you explain how to implement authentication with JWT tokens?"
        onClick={(s) => console.log('Clicked:', s)}
      />
      <Suggestion
        suggestion="What's the difference between REST and GraphQL APIs?"
        onClick={(s) => console.log('Clicked:', s)}
      />
      <Suggestion
        suggestion="How do I optimize React performance for large lists?"
        onClick={(s) => console.log('Clicked:', s)}
      />
    </Suggestions>
  ),
};

export const CustomVariant: Story = {
  render: () => (
    <Suggestions>
      {sampleSuggestions.map((suggestion) => (
        <Suggestion
          key={suggestion}
          suggestion={suggestion}
          variant="secondary"
          onClick={(s) => console.log('Clicked:', s)}
        />
      ))}
    </Suggestions>
  ),
};
