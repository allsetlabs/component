import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Timeline,
  TimelineItem,
  TimelineItemDate,
  TimelineItemDescription,
  TimelineItemTitle,
} from './timeline';

const meta = {
  title: 'UI/Timeline',
  component: Timeline,
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-01-15')}</TimelineItemDate>
        <TimelineItemTitle>Project Started</TimelineItemTitle>
        <TimelineItemDescription>
          Initial project setup and requirements gathering.
        </TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-02-01')}</TimelineItemDate>
        <TimelineItemTitle>Development Phase</TimelineItemTitle>
        <TimelineItemDescription>Core features implementation and testing.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-03-15')}</TimelineItemDate>
        <TimelineItemTitle>Launch</TimelineItemTitle>
        <TimelineItemDescription>Product launched to production.</TimelineItemDescription>
      </TimelineItem>
    </Timeline>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Timeline orientation="horizontal">
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-01-15')}</TimelineItemDate>
        <TimelineItemTitle>Planning</TimelineItemTitle>
        <TimelineItemDescription>Define project scope</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-02-01')}</TimelineItemDate>
        <TimelineItemTitle>Design</TimelineItemTitle>
        <TimelineItemDescription>Create mockups</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-03-15')}</TimelineItemDate>
        <TimelineItemTitle>Build</TimelineItemTitle>
        <TimelineItemDescription>Develop features</TimelineItemDescription>
      </TimelineItem>
    </Timeline>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Timeline orientation="vertical">
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-01-15')}</TimelineItemDate>
        <TimelineItemTitle>Project Kickoff</TimelineItemTitle>
        <TimelineItemDescription>Team assembled and goals defined.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-02-01')}</TimelineItemDate>
        <TimelineItemTitle>MVP Released</TimelineItemTitle>
        <TimelineItemDescription>First working version deployed.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-03-15')}</TimelineItemDate>
        <TimelineItemTitle>User Testing</TimelineItemTitle>
        <TimelineItemDescription>Gathered feedback from beta users.</TimelineItemDescription>
      </TimelineItem>
    </Timeline>
  ),
};

export const NonAlternating: Story = {
  render: () => (
    <Timeline alternating={false}>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-01-15')}</TimelineItemDate>
        <TimelineItemTitle>Step 1</TimelineItemTitle>
        <TimelineItemDescription>First milestone achieved.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-02-01')}</TimelineItemDate>
        <TimelineItemTitle>Step 2</TimelineItemTitle>
        <TimelineItemDescription>Second phase complete.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-03-15')}</TimelineItemDate>
        <TimelineItemTitle>Step 3</TimelineItemTitle>
        <TimelineItemDescription>Final stage reached.</TimelineItemDescription>
      </TimelineItem>
    </Timeline>
  ),
};

export const TopLeftAlignment: Story = {
  render: () => (
    <Timeline alternating={false} alignment="top/left">
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-01-15')}</TimelineItemDate>
        <TimelineItemTitle>Start</TimelineItemTitle>
        <TimelineItemDescription>Project begins.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-02-01')}</TimelineItemDate>
        <TimelineItemTitle>Progress</TimelineItemTitle>
        <TimelineItemDescription>Development ongoing.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-03-15')}</TimelineItemDate>
        <TimelineItemTitle>Complete</TimelineItemTitle>
        <TimelineItemDescription>Project finished.</TimelineItemDescription>
      </TimelineItem>
    </Timeline>
  ),
};

export const SecondaryVariant: Story = {
  render: () => (
    <Timeline>
      <TimelineItem variant="secondary">
        <TimelineItemDate>{new Date('2024-01-15')}</TimelineItemDate>
        <TimelineItemTitle>Event 1</TimelineItemTitle>
        <TimelineItemDescription>Secondary variant item.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem variant="secondary">
        <TimelineItemDate>{new Date('2024-02-01')}</TimelineItemDate>
        <TimelineItemTitle>Event 2</TimelineItemTitle>
        <TimelineItemDescription>Another secondary item.</TimelineItemDescription>
      </TimelineItem>
    </Timeline>
  ),
};

export const DestructiveVariant: Story = {
  render: () => (
    <Timeline>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-01-15')}</TimelineItemDate>
        <TimelineItemTitle>Normal Event</TimelineItemTitle>
        <TimelineItemDescription>Standard timeline item.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem variant="destructive">
        <TimelineItemDate>{new Date('2024-02-01')}</TimelineItemDate>
        <TimelineItemTitle>Critical Issue</TimelineItemTitle>
        <TimelineItemDescription>Major problem encountered.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-03-15')}</TimelineItemDate>
        <TimelineItemTitle>Resolved</TimelineItemTitle>
        <TimelineItemDescription>Issue fixed and back on track.</TimelineItemDescription>
      </TimelineItem>
    </Timeline>
  ),
};

export const HollowDots: Story = {
  render: () => (
    <Timeline>
      <TimelineItem hollow>
        <TimelineItemDate>{new Date('2024-01-15')}</TimelineItemDate>
        <TimelineItemTitle>Hollow Dot</TimelineItemTitle>
        <TimelineItemDescription>Timeline with hollow dots.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem hollow>
        <TimelineItemDate>{new Date('2024-02-01')}</TimelineItemDate>
        <TimelineItemTitle>Another Hollow</TimelineItemTitle>
        <TimelineItemDescription>Second hollow dot item.</TimelineItemDescription>
      </TimelineItem>
    </Timeline>
  ),
};

export const NoCards: Story = {
  render: () => (
    <Timeline noCards>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-01-15')}</TimelineItemDate>
        <TimelineItemTitle>Minimal Style</TimelineItemTitle>
        <TimelineItemDescription>Timeline without card backgrounds.</TimelineItemDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineItemDate>{new Date('2024-02-01')}</TimelineItemDate>
        <TimelineItemTitle>Clean Layout</TimelineItemTitle>
        <TimelineItemDescription>Simpler visual presentation.</TimelineItemDescription>
      </TimelineItem>
    </Timeline>
  ),
};
