import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Commit,
  CommitHeader,
  CommitInfo,
  CommitHash,
  CommitMessage,
  CommitMetadata,
  CommitAuthor,
  CommitAuthorAvatar,
  CommitSeparator,
  CommitTimestamp,
  CommitActions,
  CommitCopyButton,
  CommitContent,
  CommitFiles,
  CommitFile,
  CommitFileInfo,
  CommitFileIcon,
  CommitFileStatus,
  CommitFilePath,
  CommitFileChanges,
  CommitFileAdditions,
  CommitFileDeletions,
} from './commit';

const meta = {
  title: 'AI Elements/Commit',
  component: Commit,
  tags: ['autodocs'],
} satisfies Meta<typeof Commit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Commit defaultOpen>
      <CommitHeader>
        <CommitInfo>
          <CommitMessage>Add new feature for user authentication</CommitMessage>
          <CommitMetadata>
            <CommitAuthor>
              <CommitAuthorAvatar initials="JD" />
              <span className="ml-2">John Doe</span>
            </CommitAuthor>
            <CommitSeparator />
            <CommitTimestamp date={new Date(Date.now() - 86400000)} />
            <CommitSeparator />
            <CommitHash>a1b2c3d</CommitHash>
          </CommitMetadata>
        </CommitInfo>
        <CommitActions>
          <CommitCopyButton hash="a1b2c3d4e5f6" />
        </CommitActions>
      </CommitHeader>
      <CommitContent>
        <CommitFiles>
          <CommitFile>
            <CommitFileInfo>
              <CommitFileStatus status="added" />
              <CommitFileIcon />
              <CommitFilePath>src/auth/login.ts</CommitFilePath>
            </CommitFileInfo>
            <CommitFileChanges>
              <CommitFileAdditions count={45} />
            </CommitFileChanges>
          </CommitFile>
          <CommitFile>
            <CommitFileInfo>
              <CommitFileStatus status="modified" />
              <CommitFileIcon />
              <CommitFilePath>src/auth/index.ts</CommitFilePath>
            </CommitFileInfo>
            <CommitFileChanges>
              <CommitFileAdditions count={12} />
              <CommitFileDeletions count={5} />
            </CommitFileChanges>
          </CommitFile>
          <CommitFile>
            <CommitFileInfo>
              <CommitFileStatus status="deleted" />
              <CommitFileIcon />
              <CommitFilePath>src/auth/old-login.ts</CommitFilePath>
            </CommitFileInfo>
            <CommitFileChanges>
              <CommitFileDeletions count={98} />
            </CommitFileChanges>
          </CommitFile>
        </CommitFiles>
      </CommitContent>
    </Commit>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Commit defaultOpen={false}>
      <CommitHeader>
        <CommitInfo>
          <CommitMessage>Fix typo in documentation</CommitMessage>
          <CommitMetadata>
            <CommitAuthor>
              <CommitAuthorAvatar initials="AS" />
              <span className="ml-2">Alice Smith</span>
            </CommitAuthor>
            <CommitSeparator />
            <CommitTimestamp date={new Date(Date.now() - 172800000)} />
          </CommitMetadata>
        </CommitInfo>
      </CommitHeader>
      <CommitContent>
        <CommitFiles>
          <CommitFile>
            <CommitFileInfo>
              <CommitFileStatus status="modified" />
              <CommitFileIcon />
              <CommitFilePath>README.md</CommitFilePath>
            </CommitFileInfo>
            <CommitFileChanges>
              <CommitFileAdditions count={1} />
              <CommitFileDeletions count={1} />
            </CommitFileChanges>
          </CommitFile>
        </CommitFiles>
      </CommitContent>
    </Commit>
  ),
};
