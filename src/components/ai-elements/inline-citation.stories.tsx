import type { Meta, StoryObj } from '@storybook/react-vite';
import { InlineCitation, InlineCitationText } from './inline-citation';

const meta = {
  title: 'AI Elements/InlineCitation',
  component: InlineCitation,
  tags: ['autodocs'],
} satisfies Meta<typeof InlineCitation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <p className="text-sm">
      According to recent studies{' '}
      <InlineCitation>
        <InlineCitationText>[1]</InlineCitationText>
      </InlineCitation>
      , the findings show significant improvement.
    </p>
  ),
};

export const MultipleCitations: Story = {
  render: () => (
    <p className="text-sm">
      The research{' '}
      <InlineCitation>
        <InlineCitationText>[1]</InlineCitationText>
      </InlineCitation>{' '}
      was confirmed by subsequent studies{' '}
      <InlineCitation>
        <InlineCitationText>[2]</InlineCitationText>
      </InlineCitation>{' '}
      and{' '}
      <InlineCitation>
        <InlineCitationText>[3]</InlineCitationText>
      </InlineCitation>
      .
    </p>
  ),
};
