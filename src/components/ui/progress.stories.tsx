import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Progress value={60} className="w-[60%]" />,
};

export const Empty: Story = {
  render: () => <Progress value={0} className="w-[60%]" />,
};

export const Full: Story = {
  render: () => <Progress value={100} className="w-[60%]" />,
};

export const Half: Story = {
  render: () => <Progress value={50} className="w-[60%]" />,
};
