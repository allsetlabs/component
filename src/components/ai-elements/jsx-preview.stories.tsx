import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSXPreview } from './jsx-preview';

const meta = {
  title: 'AI Elements/JSXPreview',
  component: JSXPreview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Renders JSX code strings as live React components. Used for previewing AI-generated UI code.',
      },
    },
  },
} satisfies Meta<typeof JSXPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    jsx: '<div>Hello World</div>',
  },
};

export const WithStyling: Story = {
  args: {
    jsx: '<div className="p-4 rounded-md border bg-muted"><p className="text-sm">Styled content</p></div>',
  },
};
