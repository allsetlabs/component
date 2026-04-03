import type { Meta, StoryObj } from '@storybook/react-vite';
import { Copy, Download, Share } from 'lucide-react';
import { Button } from './button';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group';

const meta = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">
        <Copy className="h-4 w-4" />
      </Button>
      <Button variant="outline">
        <Download className="h-4 w-4" />
      </Button>
      <Button variant="outline">
        <Share className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  ),
};

export const WithSeparators: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Download</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Share</Button>
    </ButtonGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Action</Button>
      <ButtonGroupText>Selected: 5</ButtonGroupText>
    </ButtonGroup>
  ),
};

export const MixedContent: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>
        <Copy className="h-4 w-4" />
        Files
      </ButtonGroupText>
      <ButtonGroupSeparator />
      <Button variant="ghost" size="sm">
        Copy
      </Button>
      <Button variant="ghost" size="sm">
        Download
      </Button>
    </ButtonGroup>
  ),
};
