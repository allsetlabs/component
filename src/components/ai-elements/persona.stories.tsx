import type { Meta, StoryObj } from '@storybook/react-vite';
import { Persona } from './persona';

const meta = {
  title: 'AI Elements/Persona',
  component: Persona,
  tags: ['autodocs'],
} satisfies Meta<typeof Persona>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'idle',
  },
};

export const Listening: Story = {
  args: {
    state: 'listening',
    variant: 'command',
  },
};
