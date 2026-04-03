import type { Meta, StoryObj } from '@storybook/react-vite';
import { Shimmer } from './shimmer';

const meta = {
  title: 'AI Elements/Shimmer',
  component: Shimmer,
  tags: ['autodocs'],
} satisfies Meta<typeof Shimmer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Loading content...',
  },
};

export const CustomDuration: Story = {
  args: {
    children: 'Slow shimmer effect',
    duration: 4,
  },
};

export const CustomSpread: Story = {
  args: {
    children: 'Wide shimmer',
    spread: 5,
  },
};

export const AsHeading: Story = {
  args: {
    as: 'h1',
    children: 'Loading Title',
    className: 'text-2xl font-bold',
  },
};
