import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../ui/button';
import {
  VoiceSelector,
  VoiceSelectorTrigger,
  VoiceSelectorContent,
  VoiceSelectorInput,
  VoiceSelectorList,
  VoiceSelectorEmpty,
  VoiceSelectorGroup,
  VoiceSelectorItem,
  VoiceSelectorName,
  VoiceSelectorGender,
  VoiceSelectorAccent,
} from './voice-selector';

const meta = {
  title: 'AI Elements/VoiceSelector',
  component: VoiceSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof VoiceSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VoiceSelector>
      <VoiceSelectorTrigger asChild>
        <Button variant="outline">Select Voice</Button>
      </VoiceSelectorTrigger>
      <VoiceSelectorContent>
        <VoiceSelectorInput placeholder="Search voices..." />
        <VoiceSelectorList>
          <VoiceSelectorEmpty>No voices found.</VoiceSelectorEmpty>
          <VoiceSelectorGroup heading="Available Voices">
            <VoiceSelectorItem value="alloy">
              <VoiceSelectorName>Alloy</VoiceSelectorName>
              <VoiceSelectorGender value="non-binary" />
              <VoiceSelectorAccent value="american" />
            </VoiceSelectorItem>
            <VoiceSelectorItem value="echo">
              <VoiceSelectorName>Echo</VoiceSelectorName>
              <VoiceSelectorGender value="male" />
              <VoiceSelectorAccent value="american" />
            </VoiceSelectorItem>
            <VoiceSelectorItem value="fable">
              <VoiceSelectorName>Fable</VoiceSelectorName>
              <VoiceSelectorGender value="female" />
              <VoiceSelectorAccent value="british" />
            </VoiceSelectorItem>
            <VoiceSelectorItem value="onyx">
              <VoiceSelectorName>Onyx</VoiceSelectorName>
              <VoiceSelectorGender value="male" />
              <VoiceSelectorAccent value="american" />
            </VoiceSelectorItem>
          </VoiceSelectorGroup>
        </VoiceSelectorList>
      </VoiceSelectorContent>
    </VoiceSelector>
  ),
};

export const WithSelectedVoice: Story = {
  render: () => (
    <VoiceSelector defaultValue="echo">
      <VoiceSelectorTrigger asChild>
        <Button variant="outline">Select Voice</Button>
      </VoiceSelectorTrigger>
      <VoiceSelectorContent>
        <VoiceSelectorInput placeholder="Search voices..." />
        <VoiceSelectorList>
          <VoiceSelectorEmpty>No voices found.</VoiceSelectorEmpty>
          <VoiceSelectorGroup heading="Available Voices">
            <VoiceSelectorItem value="alloy">
              <VoiceSelectorName>Alloy</VoiceSelectorName>
              <VoiceSelectorGender value="non-binary" />
              <VoiceSelectorAccent value="american" />
            </VoiceSelectorItem>
            <VoiceSelectorItem value="echo">
              <VoiceSelectorName>Echo</VoiceSelectorName>
              <VoiceSelectorGender value="male" />
              <VoiceSelectorAccent value="american" />
            </VoiceSelectorItem>
            <VoiceSelectorItem value="fable">
              <VoiceSelectorName>Fable</VoiceSelectorName>
              <VoiceSelectorGender value="female" />
              <VoiceSelectorAccent value="british" />
            </VoiceSelectorItem>
            <VoiceSelectorItem value="onyx">
              <VoiceSelectorName>Onyx</VoiceSelectorName>
              <VoiceSelectorGender value="male" />
              <VoiceSelectorAccent value="american" />
            </VoiceSelectorItem>
          </VoiceSelectorGroup>
        </VoiceSelectorList>
      </VoiceSelectorContent>
    </VoiceSelector>
  ),
};
