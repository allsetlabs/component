import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

const meta = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />,
};

export const Range: Story = {
  render: () => <Slider defaultValue={[25]} min={0} max={100} step={5} className="w-[60%]" />,
};

export const Disabled: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} disabled className="w-[60%]" />,
};
