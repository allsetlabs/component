import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  EnvironmentVariables,
  EnvironmentVariablesHeader,
  EnvironmentVariablesTitle,
  EnvironmentVariablesToggle,
  EnvironmentVariablesContent,
  EnvironmentVariable,
  EnvironmentVariableName,
  EnvironmentVariableValue,
  EnvironmentVariableGroup,
  EnvironmentVariableCopyButton,
  EnvironmentVariableRequired,
} from './environment-variables';

const meta = {
  title: 'AI Elements/EnvironmentVariables',
  component: EnvironmentVariables,
  tags: ['autodocs'],
} satisfies Meta<typeof EnvironmentVariables>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <EnvironmentVariables defaultShowValues={false}>
      <EnvironmentVariablesHeader>
        <EnvironmentVariablesTitle />
        <EnvironmentVariablesToggle />
      </EnvironmentVariablesHeader>
      <EnvironmentVariablesContent>
        <EnvironmentVariable name="API_KEY" value="sk-1234567890abcdef" />
        <EnvironmentVariable name="DATABASE_URL" value="postgresql://localhost:5432/db" />
        <EnvironmentVariable name="SECRET_TOKEN" value="super-secret-token-here" />
      </EnvironmentVariablesContent>
    </EnvironmentVariables>
  ),
};

export const WithRequired: Story = {
  render: () => (
    <EnvironmentVariables defaultShowValues={false}>
      <EnvironmentVariablesHeader>
        <EnvironmentVariablesTitle />
        <EnvironmentVariablesToggle />
      </EnvironmentVariablesHeader>
      <EnvironmentVariablesContent>
        <EnvironmentVariable name="API_KEY" value="sk-1234567890abcdef">
          <EnvironmentVariableGroup>
            <EnvironmentVariableName />
            <EnvironmentVariableRequired />
          </EnvironmentVariableGroup>
          <EnvironmentVariableGroup>
            <EnvironmentVariableValue />
            <EnvironmentVariableCopyButton />
          </EnvironmentVariableGroup>
        </EnvironmentVariable>
        <EnvironmentVariable name="OPTIONAL_KEY" value="optional-value-here">
          <EnvironmentVariableGroup>
            <EnvironmentVariableName />
          </EnvironmentVariableGroup>
          <EnvironmentVariableGroup>
            <EnvironmentVariableValue />
            <EnvironmentVariableCopyButton />
          </EnvironmentVariableGroup>
        </EnvironmentVariable>
      </EnvironmentVariablesContent>
    </EnvironmentVariables>
  ),
};

export const ValuesVisible: Story = {
  render: () => (
    <EnvironmentVariables defaultShowValues={true}>
      <EnvironmentVariablesHeader>
        <EnvironmentVariablesTitle>Configuration</EnvironmentVariablesTitle>
        <EnvironmentVariablesToggle />
      </EnvironmentVariablesHeader>
      <EnvironmentVariablesContent>
        <EnvironmentVariable name="NODE_ENV" value="production">
          <EnvironmentVariableGroup>
            <EnvironmentVariableName />
          </EnvironmentVariableGroup>
          <EnvironmentVariableGroup>
            <EnvironmentVariableValue />
            <EnvironmentVariableCopyButton copyFormat="export" />
          </EnvironmentVariableGroup>
        </EnvironmentVariable>
        <EnvironmentVariable name="PORT" value="3000" />
        <EnvironmentVariable name="HOST" value="localhost" />
      </EnvironmentVariablesContent>
    </EnvironmentVariables>
  ),
};
