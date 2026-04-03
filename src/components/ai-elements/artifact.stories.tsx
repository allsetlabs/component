import type { Meta, StoryObj } from '@storybook/react-vite';
import { CopyIcon, DownloadIcon } from 'lucide-react';
import {
  Artifact,
  ArtifactHeader,
  ArtifactTitle,
  ArtifactDescription,
  ArtifactActions,
  ArtifactAction,
  ArtifactClose,
  ArtifactContent,
} from './artifact';

const meta = {
  title: 'AI Elements/Artifact',
  component: Artifact,
  tags: ['autodocs'],
} satisfies Meta<typeof Artifact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Artifact>
      <ArtifactHeader>
        <div>
          <ArtifactTitle>Generated Code</ArtifactTitle>
          <ArtifactDescription>React Component Example</ArtifactDescription>
        </div>
        <div className="flex items-center gap-2">
          <ArtifactActions>
            <ArtifactAction tooltip="Copy code" icon={CopyIcon} />
            <ArtifactAction tooltip="Download" icon={DownloadIcon} />
          </ArtifactActions>
          <ArtifactClose />
        </div>
      </ArtifactHeader>
      <ArtifactContent>
        <pre className="text-sm">
          {`function Button({ children }) {
  return <button>{children}</button>;
}`}
        </pre>
      </ArtifactContent>
    </Artifact>
  ),
};

export const WithoutActions: Story = {
  render: () => (
    <Artifact>
      <ArtifactHeader>
        <ArtifactTitle>Simple Artifact</ArtifactTitle>
        <ArtifactClose />
      </ArtifactHeader>
      <ArtifactContent>
        <p className="text-sm">Some generated content here.</p>
      </ArtifactContent>
    </Artifact>
  ),
};
