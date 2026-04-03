import type { Meta, StoryObj } from '@storybook/react-vite';
import { Task, TaskTrigger, TaskContent, TaskItem, TaskItemFile } from './task';

const meta = {
  title: 'AI Elements/Task',
  component: Task,
  tags: ['autodocs'],
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Task>
      <TaskTrigger title="Searching documentation" />
      <TaskContent>
        <TaskItem>
          Found 3 relevant files: <TaskItemFile>README.md</TaskItemFile>,{' '}
          <TaskItemFile>guide.md</TaskItemFile>, <TaskItemFile>api.md</TaskItemFile>
        </TaskItem>
        <TaskItem>Processing content...</TaskItem>
      </TaskContent>
    </Task>
  ),
};

export const Closed: Story = {
  render: () => (
    <Task defaultOpen={false}>
      <TaskTrigger title="Analyzing code" />
      <TaskContent>
        <TaskItem>Scanned 15 files</TaskItem>
        <TaskItem>Found 2 issues</TaskItem>
      </TaskContent>
    </Task>
  ),
};
