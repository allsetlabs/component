import type { Meta, StoryObj } from '@storybook/react-vite';
import { StackTrace } from './stack-trace';

const meta = {
  title: 'AI Elements/StackTrace',
  component: StackTrace,
  tags: ['autodocs'],
} satisfies Meta<typeof StackTrace>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTrace = `Error: Cannot read property 'foo' of undefined
    at processData (app.js:42:15)
    at handleRequest (server.js:123:5)
    at Server.<anonymous> (server.js:89:3)`;

export const Default: Story = {
  args: {
    trace: mockTrace,
  },
};

export const LongTrace: Story = {
  args: {
    trace: `TypeError: undefined is not a function
    at Array.map (<anonymous>)
    at processItems (utils.js:156:23)
    at transformData (transform.js:89:12)
    at handleData (handler.js:45:10)
    at processRequest (middleware.js:78:7)
    at Layer.handle (express/lib/router/layer.js:95:5)
    at next (express/lib/router/route.js:137:13)`,
  },
};
