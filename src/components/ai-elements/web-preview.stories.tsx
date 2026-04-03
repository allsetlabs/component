import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  WebPreview,
  WebPreviewNavigation,
  WebPreviewNavigationButton,
  WebPreviewUrl,
  WebPreviewBody,
} from './web-preview';
import { ArrowLeftIcon, ArrowRightIcon, RefreshCwIcon } from 'lucide-react';

const meta = {
  title: 'AI Elements/WebPreview',
  component: WebPreview,
  tags: ['autodocs'],
} satisfies Meta<typeof WebPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <WebPreview defaultUrl="https://example.com" className="h-96">
      <WebPreviewNavigation>
        <WebPreviewNavigationButton tooltip="Back">
          <ArrowLeftIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton tooltip="Forward">
          <ArrowRightIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton tooltip="Refresh">
          <RefreshCwIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewUrl />
      </WebPreviewNavigation>
      <WebPreviewBody />
    </WebPreview>
  ),
};

export const WithCustomHeight: Story = {
  render: () => (
    <WebPreview defaultUrl="https://example.com" className="h-[600px]">
      <WebPreviewNavigation>
        <WebPreviewNavigationButton tooltip="Back">
          <ArrowLeftIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton tooltip="Forward">
          <ArrowRightIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton tooltip="Refresh">
          <RefreshCwIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewUrl />
      </WebPreviewNavigation>
      <WebPreviewBody />
    </WebPreview>
  ),
};

export const WithoutNavigation: Story = {
  render: () => (
    <WebPreview defaultUrl="https://example.com" className="h-96">
      <WebPreviewBody />
    </WebPreview>
  ),
};
