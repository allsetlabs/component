import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Agent,
  AgentHeader,
  AgentContent,
  AgentInstructions,
  AgentTools,
  AgentTool,
  AgentOutput,
} from './agent';

const meta = {
  title: 'AI Elements/Agent',
  component: Agent,
  tags: ['autodocs'],
} satisfies Meta<typeof Agent>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTool = {
  description: 'Get the current weather',
  inputSchema: {
    type: 'object' as const,
    properties: {
      location: { type: 'string', description: 'City name' },
      units: { type: 'string', enum: ['celsius', 'fahrenheit'] },
    },
    required: ['location'],
  },
} as unknown as Parameters<typeof AgentTool>[0]['tool'];

export const Default: Story = {
  render: () => (
    <Agent>
      <AgentHeader name="Weather Assistant" model="claude-opus-4-6" />
      <AgentContent>
        <AgentInstructions>
          You are a helpful weather assistant. Provide accurate weather information for any location
          requested by the user.
        </AgentInstructions>
        <AgentTools type="single" collapsible>
          <AgentTool tool={mockTool} value="weather" />
        </AgentTools>
        <AgentOutput schema="interface WeatherResponse { temperature: number; conditions: string; }" />
      </AgentContent>
    </Agent>
  ),
};

export const WithoutModel: Story = {
  render: () => (
    <Agent>
      <AgentHeader name="Simple Agent" />
      <AgentContent>
        <AgentInstructions>A basic agent without model information.</AgentInstructions>
      </AgentContent>
    </Agent>
  ),
};
