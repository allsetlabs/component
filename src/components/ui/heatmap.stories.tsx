import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heatmap, HeatmapData } from './heatmap';

const meta = {
  title: 'UI/Heatmap',
  component: Heatmap,
  tags: ['autodocs'],
} satisfies Meta<typeof Heatmap>;

export default meta;
type Story = StoryObj<typeof meta>;

// Generate sample data for the last 90 days
const generateSampleData = (days: number): HeatmapData => {
  const data: HeatmapData = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    const value = Math.floor(Math.random() * 10);

    data.push({ date: dateString, value });
  }

  return data.reverse();
};

const startDate = new Date();
startDate.setDate(startDate.getDate() - 89);
const endDate = new Date();

export const Default: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    colorMode: 'discrete',
  },
};

export const Squares: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    displayStyle: 'squares',
    colorMode: 'discrete',
  },
};

export const Bubbles: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    displayStyle: 'bubbles',
    colorMode: 'discrete',
  },
};

export const InterpolateLinear: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    colorMode: 'interpolate',
    interpolation: 'linear',
  },
};

export const InterpolateSqrt: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    colorMode: 'interpolate',
    interpolation: 'sqrt',
  },
};

export const InterpolateLog: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    colorMode: 'interpolate',
    interpolation: 'log',
  },
};

export const AllDaysOfWeek: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    daysOfTheWeek: 'all',
    colorMode: 'discrete',
  },
};

export const MWFDaysOfWeek: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    daysOfTheWeek: 'MWF',
    colorMode: 'discrete',
  },
};

export const SingleLetterDays: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    daysOfTheWeek: 'single letter',
    colorMode: 'discrete',
  },
};

export const NoDaysOfWeek: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    daysOfTheWeek: 'none',
    colorMode: 'discrete',
  },
};

export const SmallCells: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    cellSize: 12,
    gap: 2,
    colorMode: 'discrete',
  },
};

export const LargeCells: Story = {
  args: {
    data: generateSampleData(90),
    startDate,
    endDate,
    cellSize: 28,
    gap: 6,
    colorMode: 'discrete',
  },
};
