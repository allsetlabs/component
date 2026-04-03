import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sources, SourcesTrigger, SourcesContent, Source } from './sources';

const meta = {
  title: 'AI Elements/Sources',
  component: Sources,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Sources>
      <SourcesTrigger count={3} />
      <SourcesContent>
        <Source href="https://docs.example.com" title="Documentation" />
        <Source href="https://api.example.com/reference" title="API Reference" />
        <Source href="https://example.com/tutorial" title="Tutorial" />
      </SourcesContent>
    </Sources>
  ),
};

export const SingleSource: Story = {
  render: () => (
    <Sources>
      <SourcesTrigger count={1} />
      <SourcesContent>
        <Source href="https://docs.example.com" title="Documentation" />
      </SourcesContent>
    </Sources>
  ),
};
