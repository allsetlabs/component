import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTitle,
  CodeBlockFilename,
  CodeBlockActions,
  CodeBlockCopyButton,
} from './code-block';

const meta = {
  title: 'AI Elements/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCode = `function hello(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(hello("World"));`;

export const Default: Story = {
  args: {
    code: sampleCode,
    language: 'typescript',
  },
};

export const WithLineNumbers: Story = {
  args: {
    code: sampleCode,
    language: 'typescript',
    showLineNumbers: true,
  },
};

export const WithHeader: Story = {
  args: {
    code: sampleCode,
    language: 'typescript',
  },
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockHeader>
        <CodeBlockTitle>
          <CodeBlockFilename>hello.ts</CodeBlockFilename>
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton />
        </CodeBlockActions>
      </CodeBlockHeader>
    </CodeBlock>
  ),
};

export const Python: Story = {
  args: {
    code: `def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`,
    language: 'python',
  },
};

export const JSON: Story = {
  args: {
    code: `{
  "name": "example",
  "version": "1.0.0",
  "main": "index.js"
}`,
    language: 'json',
  },
};
