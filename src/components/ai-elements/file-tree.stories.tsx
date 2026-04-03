import type { Meta, StoryObj } from '@storybook/react-vite';
import type { FileTreeProps } from './file-tree';
import { FileTree, FileTreeFile, FileTreeFolder } from './file-tree';
import { useState } from 'react';

const meta = {
  title: 'AI Elements/FileTree',
  component: FileTree,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Interactive file tree component for displaying and navigating file structures. Uses collapsible folders and clickable files.',
      },
    },
  },
} satisfies Meta<typeof FileTree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FileTree defaultExpanded={new Set(['src'])}>
      <FileTreeFolder name="src" path="src">
        <FileTreeFile name="index.ts" path="src/index.ts" />
        <FileTreeFile name="utils.ts" path="src/utils.ts" />
        <FileTreeFolder name="components" path="src/components">
          <FileTreeFile name="Button.tsx" path="src/components/Button.tsx" />
          <FileTreeFile name="Input.tsx" path="src/components/Input.tsx" />
        </FileTreeFolder>
      </FileTreeFolder>
      <FileTreeFile name="package.json" path="package.json" />
      <FileTreeFile name="tsconfig.json" path="tsconfig.json" />
    </FileTree>
  ),
};

export const WithSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | undefined>('src/index.ts');
    const handleSelect = (path: string) => setSelected(path);
    return (
      <FileTree
        defaultExpanded={new Set(['src'])}
        onSelect={handleSelect as FileTreeProps['onSelect']}
        selectedPath={selected}
      >
        <FileTreeFolder name="src" path="src">
          <FileTreeFile name="index.ts" path="src/index.ts" />
          <FileTreeFile name="app.ts" path="src/app.ts" />
          <FileTreeFile name="config.ts" path="src/config.ts" />
        </FileTreeFolder>
        <FileTreeFile name="README.md" path="README.md" />
      </FileTree>
    );
  },
};

export const ControlledExpansion: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(new Set(['src', 'src/lib']));
    return (
      <FileTree expanded={expanded} onExpandedChange={setExpanded}>
        <FileTreeFolder name="src" path="src">
          <FileTreeFolder name="lib" path="src/lib">
            <FileTreeFile name="utils.ts" path="src/lib/utils.ts" />
            <FileTreeFile name="helpers.ts" path="src/lib/helpers.ts" />
          </FileTreeFolder>
          <FileTreeFolder name="routes" path="src/routes">
            <FileTreeFile name="index.ts" path="src/routes/index.ts" />
          </FileTreeFolder>
        </FileTreeFolder>
      </FileTree>
    );
  },
};

export const NestedStructure: Story = {
  render: () => (
    <FileTree defaultExpanded={new Set(['project', 'project/src', 'project/src/components'])}>
      <FileTreeFolder name="project" path="project">
        <FileTreeFolder name="src" path="project/src">
          <FileTreeFolder name="components" path="project/src/components">
            <FileTreeFile name="Header.tsx" path="project/src/components/Header.tsx" />
            <FileTreeFile name="Footer.tsx" path="project/src/components/Footer.tsx" />
            <FileTreeFile name="Sidebar.tsx" path="project/src/components/Sidebar.tsx" />
          </FileTreeFolder>
          <FileTreeFile name="main.tsx" path="project/src/main.tsx" />
          <FileTreeFile name="App.tsx" path="project/src/App.tsx" />
        </FileTreeFolder>
        <FileTreeFolder name="tests" path="project/tests">
          <FileTreeFile name="setup.ts" path="project/tests/setup.ts" />
        </FileTreeFolder>
        <FileTreeFile name="package.json" path="project/package.json" />
        <FileTreeFile name=".gitignore" path="project/.gitignore" />
      </FileTreeFolder>
    </FileTree>
  ),
};
