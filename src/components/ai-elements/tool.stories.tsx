import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tool, ToolHeader, ToolContent, ToolInput, ToolOutput } from './tool';

const meta = {
  title: 'AI Elements/Tool',
  component: Tool,
  tags: ['autodocs'],
} satisfies Meta<typeof Tool>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockInput = {
  location: 'San Francisco',
  units: 'celsius',
};

const mockOutput = {
  temperature: 18,
  conditions: 'Partly cloudy',
  humidity: 65,
};

export const Completed: Story = {
  render: () => (
    <Tool defaultOpen>
      <ToolHeader type="tool-call" state="output-available" title="Get Weather" />
      <ToolContent>
        <ToolInput input={mockInput} />
        <ToolOutput output={mockOutput} errorText={undefined} />
      </ToolContent>
    </Tool>
  ),
};

export const Running: Story = {
  render: () => (
    <Tool defaultOpen>
      <ToolHeader type="tool-call" state="input-available" title="Search Database" />
      <ToolContent>
        <ToolInput input={{ query: 'user data', limit: 10 }} />
      </ToolContent>
    </Tool>
  ),
};

export const Error: Story = {
  render: () => (
    <Tool defaultOpen>
      <ToolHeader type="tool-call" state="output-error" title="API Call Failed" />
      <ToolContent>
        <ToolInput input={{ endpoint: '/api/data' }} />
        <ToolOutput output={undefined} errorText="Network error: Failed to connect" />
      </ToolContent>
    </Tool>
  ),
};

export const AwaitingApproval: Story = {
  render: () => (
    <Tool defaultOpen>
      <ToolHeader type="tool-call" state="approval-requested" title="Delete File" />
      <ToolContent>
        <ToolInput input={{ path: '/important/file.txt' }} />
      </ToolContent>
    </Tool>
  ),
};

export const DynamicTool: Story = {
  render: () => (
    <Tool defaultOpen>
      <ToolHeader type="dynamic-tool" state="output-available" toolName="custom_tool" />
      <ToolContent>
        <ToolInput input={{ arg1: 'value' }} />
        <ToolOutput output={{ result: 'success' }} errorText={undefined} />
      </ToolContent>
    </Tool>
  ),
};
