import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Button } from './button';
import { Toaster } from './sonner';

const meta = {
  title: 'UI/Sonner',
  component: Toaster,
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-col gap-2">
        <Button onClick={() => toast('Event has been created')}>Show Toast</Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
            })
          }
        >
          Success Toast
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast.error('Event has not been created', {
              description: 'There was a problem with your request.',
            })
          }
        >
          Error Toast
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast('Event has been created', {
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
              },
            })
          }
        >
          With Action
        </Button>
      </div>
    </>
  ),
};
