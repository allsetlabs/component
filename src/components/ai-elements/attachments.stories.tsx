import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Attachments,
  Attachment,
  AttachmentPreview,
  AttachmentInfo,
  AttachmentRemove,
} from './attachments';

const meta = {
  title: 'AI Elements/Attachments',
  component: Attachments,
  tags: ['autodocs'],
} satisfies Meta<typeof Attachments>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFile = {
  id: '1',
  type: 'file' as const,
  filename: 'document.pdf',
  mediaType: 'application/pdf',
  url: 'blob:example',
};

const mockImage = {
  id: '2',
  type: 'file' as const,
  filename: 'screenshot.png',
  mediaType: 'image/png',
  url: 'https://via.placeholder.com/150',
};

export const GridVariant: Story = {
  render: () => (
    <Attachments variant="grid">
      <Attachment data={mockImage}>
        <AttachmentPreview />
        <AttachmentRemove />
      </Attachment>
      <Attachment data={mockImage}>
        <AttachmentPreview />
        <AttachmentRemove />
      </Attachment>
    </Attachments>
  ),
};

export const InlineVariant: Story = {
  render: () => (
    <Attachments variant="inline">
      <Attachment data={mockFile}>
        <AttachmentPreview />
        <AttachmentInfo />
        <AttachmentRemove />
      </Attachment>
      <Attachment data={mockImage}>
        <AttachmentPreview />
        <AttachmentInfo />
        <AttachmentRemove />
      </Attachment>
    </Attachments>
  ),
};

export const ListVariant: Story = {
  render: () => (
    <Attachments variant="list">
      <Attachment data={mockFile}>
        <AttachmentPreview />
        <AttachmentInfo showMediaType />
        <AttachmentRemove />
      </Attachment>
      <Attachment data={mockImage}>
        <AttachmentPreview />
        <AttachmentInfo showMediaType />
        <AttachmentRemove />
      </Attachment>
    </Attachments>
  ),
};
