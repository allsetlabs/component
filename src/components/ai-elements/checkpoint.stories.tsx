import type { Meta, StoryObj } from '@storybook/react-vite';
import { FlagIcon } from 'lucide-react';
import { Checkpoint, CheckpointIcon, CheckpointTrigger } from './checkpoint';

const meta = {
  title: 'AI Elements/Checkpoint',
  component: Checkpoint,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkpoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Checkpoint>
      <CheckpointIcon />
      <CheckpointTrigger>Save Progress</CheckpointTrigger>
    </Checkpoint>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <Checkpoint>
      <CheckpointIcon />
      <CheckpointTrigger tooltip="Save your current conversation state">
        Checkpoint
      </CheckpointTrigger>
    </Checkpoint>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <Checkpoint>
      <CheckpointIcon>
        <FlagIcon className="size-4" />
      </CheckpointIcon>
      <CheckpointTrigger>Mark Milestone</CheckpointTrigger>
    </Checkpoint>
  ),
};

export const MultipleCheckpoints: Story = {
  render: () => (
    <div className="space-y-2">
      <Checkpoint>
        <CheckpointIcon />
        <CheckpointTrigger tooltip="Version 1">v1.0</CheckpointTrigger>
      </Checkpoint>
      <Checkpoint>
        <CheckpointIcon />
        <CheckpointTrigger tooltip="Version 2">v2.0</CheckpointTrigger>
      </Checkpoint>
      <Checkpoint>
        <CheckpointIcon />
        <CheckpointTrigger tooltip="Version 3">v3.0</CheckpointTrigger>
      </Checkpoint>
    </div>
  ),
};
