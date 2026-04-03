import type { Meta, StoryObj } from '@storybook/react-vite';
import { Canvas } from './canvas';

const meta = {
  title: 'AI Elements/Canvas',
  component: Canvas,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Canvas>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Process' },
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'End' },
    position: { x: 250, y: 200 },
  },
];

const sampleEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

export const Default: Story = {
  render: () => (
    <div className="h-96 w-full">
      <Canvas nodes={sampleNodes} edges={sampleEdges} />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className="h-96 w-full">
      <Canvas />
    </div>
  ),
};
