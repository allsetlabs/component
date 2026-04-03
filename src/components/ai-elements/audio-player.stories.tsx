import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AudioPlayer,
  AudioPlayerElement,
  AudioPlayerControlBar,
  AudioPlayerPlayButton,
  AudioPlayerSeekBackwardButton,
  AudioPlayerSeekForwardButton,
  AudioPlayerTimeDisplay,
  AudioPlayerTimeRange,
  AudioPlayerDurationDisplay,
  AudioPlayerMuteButton,
  AudioPlayerVolumeRange,
} from './audio-player';

const meta = {
  title: 'AI Elements/AudioPlayer',
  component: AudioPlayer,
  tags: ['autodocs'],
} satisfies Meta<typeof AudioPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Using a sample audio URL
const sampleAudio = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export const Default: Story = {
  render: () => (
    <AudioPlayer>
      <AudioPlayerElement src={sampleAudio} />
      <AudioPlayerControlBar>
        <AudioPlayerPlayButton />
        <AudioPlayerSeekBackwardButton />
        <AudioPlayerSeekForwardButton />
        <AudioPlayerTimeDisplay />
        <AudioPlayerTimeRange />
        <AudioPlayerDurationDisplay />
        <AudioPlayerMuteButton />
        <AudioPlayerVolumeRange />
      </AudioPlayerControlBar>
    </AudioPlayer>
  ),
};

export const Minimal: Story = {
  render: () => (
    <AudioPlayer>
      <AudioPlayerElement src={sampleAudio} />
      <AudioPlayerControlBar>
        <AudioPlayerPlayButton />
        <AudioPlayerTimeDisplay />
        <AudioPlayerDurationDisplay />
      </AudioPlayerControlBar>
    </AudioPlayer>
  ),
};
