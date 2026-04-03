import type { Meta, StoryObj } from '@storybook/react-vite';
import { Transcription, TranscriptionSegment } from './transcription';

const meta = {
  title: 'AI Elements/Transcription',
  component: Transcription,
  tags: ['autodocs'],
} satisfies Meta<typeof Transcription>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSegments = [
  { text: 'Hello,', startSecond: 0, endSecond: 0.5 },
  { text: 'this', startSecond: 0.5, endSecond: 0.8 },
  { text: 'is', startSecond: 0.8, endSecond: 1.0 },
  { text: 'a', startSecond: 1.0, endSecond: 1.1 },
  { text: 'sample', startSecond: 1.1, endSecond: 1.5 },
  { text: 'transcription', startSecond: 1.5, endSecond: 2.2 },
  { text: 'of', startSecond: 2.2, endSecond: 2.4 },
  { text: 'spoken', startSecond: 2.4, endSecond: 2.8 },
  { text: 'audio.', startSecond: 2.8, endSecond: 3.2 },
];

export const Default: Story = {
  args: {
    segments: mockSegments,
    children: (segment, index) => (
      <TranscriptionSegment key={index} segment={segment} index={index} />
    ),
  },
};

const longSegments = [
  { text: 'This', startSecond: 0, endSecond: 0.3 },
  { text: 'is', startSecond: 0.3, endSecond: 0.5 },
  { text: 'a', startSecond: 0.5, endSecond: 0.6 },
  { text: 'longer', startSecond: 0.6, endSecond: 1.0 },
  { text: 'transcription', startSecond: 1.0, endSecond: 1.7 },
  { text: 'example.', startSecond: 1.7, endSecond: 2.2 },
  { text: 'It', startSecond: 2.2, endSecond: 2.4 },
  { text: 'demonstrates', startSecond: 2.4, endSecond: 3.2 },
  { text: 'how', startSecond: 3.2, endSecond: 3.5 },
  { text: 'the', startSecond: 3.5, endSecond: 3.7 },
  { text: 'component', startSecond: 3.7, endSecond: 4.3 },
  { text: 'handles', startSecond: 4.3, endSecond: 4.8 },
  { text: 'multiple', startSecond: 4.8, endSecond: 5.3 },
  { text: 'sentences.', startSecond: 5.3, endSecond: 6.0 },
];

export const LongTranscription: Story = {
  args: {
    segments: longSegments,
    children: (segment, index) => (
      <TranscriptionSegment key={index} segment={segment} index={index} />
    ),
  },
};

const timestampedSegments = [
  { text: 'Hello', startSecond: 0, endSecond: 0.5 },
  { text: 'and', startSecond: 0.5, endSecond: 0.7 },
  { text: 'welcome', startSecond: 0.7, endSecond: 1.2 },
  { text: 'to', startSecond: 1.2, endSecond: 1.4 },
  { text: 'the', startSecond: 1.4, endSecond: 1.6 },
  { text: 'presentation.', startSecond: 1.6, endSecond: 2.5 },
  { text: 'Today', startSecond: 5, endSecond: 5.4 },
  { text: 'we', startSecond: 5.4, endSecond: 5.6 },
  { text: 'will', startSecond: 5.6, endSecond: 5.8 },
  { text: 'discuss', startSecond: 5.8, endSecond: 6.3 },
  { text: 'React', startSecond: 6.3, endSecond: 6.7 },
  { text: 'components.', startSecond: 6.7, endSecond: 7.5 },
];

export const WithTimestamps: Story = {
  args: {
    segments: timestampedSegments,
    currentTime: 1.0,
    children: (segment, index) => (
      <TranscriptionSegment key={index} segment={segment} index={index} />
    ),
  },
};
