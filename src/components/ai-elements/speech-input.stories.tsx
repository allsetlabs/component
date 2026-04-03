import type { Meta, StoryObj } from '@storybook/react-vite';
import { SpeechInput } from './speech-input';

const meta = {
  title: 'AI Elements/SpeechInput',
  component: SpeechInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Speech-to-text input component. Requires browser speech recognition support and microphone permissions.',
      },
    },
  },
} satisfies Meta<typeof SpeechInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onTranscriptionChange: (text: string) => console.log('Transcript:', text),
  },
};

export const WithAudioCallback: Story = {
  args: {
    onTranscriptionChange: (text: string) => console.log('Transcript:', text),
    onAudioRecorded: async (audioBlob: Blob) => {
      console.log('Audio recorded:', audioBlob);
      return 'Transcribed text from audio';
    },
  },
};
