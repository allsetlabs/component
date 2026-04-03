import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd } from './kbd';

const meta = {
  title: 'UI/Kbd',
  component: Kbd,
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="text-sm">
      Press <Kbd>Ctrl</Kbd>+<Kbd>K</Kbd> to open the command palette
    </div>
  ),
};

export const SingleKey: Story = {
  render: () => (
    <div className="text-sm">
      Press <Kbd>K</Kbd> to continue
    </div>
  ),
};

export const Shortcut: Story = {
  render: () => (
    <div className="text-sm">
      Press <Kbd>Cmd</Kbd>+<Kbd>Shift</Kbd>+<Kbd>P</Kbd> to open the command palette
    </div>
  ),
};
