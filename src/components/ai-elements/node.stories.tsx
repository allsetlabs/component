import type { Meta, StoryObj } from '@storybook/react-vite';
import { Canvas } from './canvas';
import { Node, NodeHeader, NodeTitle, NodeDescription, NodeContent } from './node';

const meta = {
  title: 'AI Elements/Node',
  component: Node,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="h-96 w-full">
      <Canvas
        nodes={[
          {
            id: '1',
            type: 'custom',
            position: { x: 250, y: 100 },
            data: {},
          },
        ]}
        nodeTypes={{
          custom: () => (
            <Node handles={{ target: true, source: true }}>
              <NodeHeader>
                <NodeTitle>Process Node</NodeTitle>
                <NodeDescription>Performs data transformation</NodeDescription>
              </NodeHeader>
              <NodeContent>
                <p className="text-sm">Node content goes here</p>
              </NodeContent>
            </Node>
          ),
        }}
      />
    </div>
  ),
};
