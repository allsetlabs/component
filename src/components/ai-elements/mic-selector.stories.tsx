import type { Meta, StoryObj } from '@storybook/react-vite';
import { MicSelector } from './mic-selector';

const meta = {
  title: 'AI Elements/MicSelector',
  component: MicSelector,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Microphone device selector for audio input. Requires browser microphone permissions.',
      },
    },
  },
} satisfies Meta<typeof MicSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: () => (
    <div className="flex h-48 items-center justify-center rounded-md border bg-muted p-4">
      <p className="text-center text-sm text-muted-foreground">
        MicSelector allows users to choose audio input devices.
        <br />
        Requires browser microphone permissions to list devices.
        <br />
        Used in speech input features.
      </p>
    </div>
  ),
};
