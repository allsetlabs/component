import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search, Mail, X, Eye, Lock } from 'lucide-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group';
import { Kbd } from './kbd';

const meta = {
  title: 'UI/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Enter text..." />
    </InputGroup>
  ),
};

export const WithInlineStartAddon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <Search className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
};

export const WithInlineEndAddon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Enter email..." />
      <InputGroupAddon align="inline-end">
        <Mail className="h-4 w-4" />
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithBlockStartAddon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="block-start">
        <InputGroupText>Label</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Value..." />
    </InputGroup>
  ),
};

export const WithBlockEndAddon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Value..." />
      <InputGroupAddon align="block-end">
        <InputGroupText>Helper text</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithButton: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          <Search className="h-4 w-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithMultipleButtons: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Password..." type="password" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          <Eye className="h-4 w-4" />
        </InputGroupButton>
        <InputGroupButton>
          <X className="h-4 w-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithTextAndIcon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <Lock className="h-4 w-4" />
        <InputGroupText>Secure</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Password..." type="password" />
    </InputGroup>
  ),
};

export const WithKbd: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="block-start">
        <InputGroupText>Description</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea placeholder="Enter description..." rows={3} />
    </InputGroup>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <Mail className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="email@example.com" aria-invalid="true" />
    </InputGroup>
  ),
};

export const AllVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Search className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Email..." />
        <InputGroupAddon align="inline-end">
          <Mail className="h-4 w-4" />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="With button..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Clear</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Label</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Value..." />
      </InputGroup>
    </div>
  ),
};
