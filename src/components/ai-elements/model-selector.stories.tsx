import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ModelSelector,
  ModelSelectorTrigger,
  ModelSelectorContent,
  ModelSelectorInput,
  ModelSelectorList,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorItem,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
} from './model-selector';
import { Button } from '../ui/button';

const meta = {
  title: 'AI Elements/ModelSelector',
  component: ModelSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof ModelSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ModelSelector>
      <ModelSelectorTrigger asChild>
        <Button variant="outline">Select Model</Button>
      </ModelSelectorTrigger>
      <ModelSelectorContent>
        <ModelSelectorInput placeholder="Search models..." />
        <ModelSelectorList>
          <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
          <ModelSelectorGroup heading="OpenAI">
            <ModelSelectorItem>
              <ModelSelectorLogoGroup>
                <ModelSelectorLogo provider="openai" />
              </ModelSelectorLogoGroup>
              <ModelSelectorName>GPT-4</ModelSelectorName>
            </ModelSelectorItem>
            <ModelSelectorItem>
              <ModelSelectorLogoGroup>
                <ModelSelectorLogo provider="openai" />
              </ModelSelectorLogoGroup>
              <ModelSelectorName>GPT-3.5 Turbo</ModelSelectorName>
            </ModelSelectorItem>
          </ModelSelectorGroup>
          <ModelSelectorGroup heading="Anthropic">
            <ModelSelectorItem>
              <ModelSelectorLogoGroup>
                <ModelSelectorLogo provider="anthropic" />
              </ModelSelectorLogoGroup>
              <ModelSelectorName>Claude Opus 4</ModelSelectorName>
            </ModelSelectorItem>
            <ModelSelectorItem>
              <ModelSelectorLogoGroup>
                <ModelSelectorLogo provider="anthropic" />
              </ModelSelectorLogoGroup>
              <ModelSelectorName>Claude Sonnet 3.5</ModelSelectorName>
            </ModelSelectorItem>
          </ModelSelectorGroup>
        </ModelSelectorList>
      </ModelSelectorContent>
    </ModelSelector>
  ),
};
