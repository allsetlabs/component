import type { Meta, StoryObj } from '@storybook/react-vite';
import { SchemaDisplay } from './schema-display';

const meta = {
  title: 'AI Elements/SchemaDisplay',
  component: SchemaDisplay,
  tags: ['autodocs'],
} satisfies Meta<typeof SchemaDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    method: 'GET',
    path: '/api/users',
    description: 'Retrieve a list of users',
    parameters: [
      { name: 'limit', type: 'number', description: 'Maximum number of results' },
      { name: 'offset', type: 'number', description: 'Number of results to skip' },
    ],
  },
};

export const PostEndpoint: Story = {
  args: {
    method: 'POST',
    path: '/api/users',
    description: 'Create a new user',
    requestBody: [
      { name: 'name', type: 'string', required: true, description: 'User name' },
      { name: 'email', type: 'string', required: true, description: 'User email' },
      { name: 'age', type: 'number', description: 'User age' },
    ],
  },
};
