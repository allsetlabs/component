import type { Meta, StoryObj } from '@storybook/react-vite';
import { Canvas } from './canvas';
import { Controls } from './controls';

const meta = {
  title: 'AI Elements/Controls',
  component: Controls,
  tags: ['autodocs'],
} satisfies Meta<typeof Controls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-96 w-full">
      <Canvas>
        <Controls />
      </Canvas>
    </div>
  ),
};
