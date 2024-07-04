import { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from '.';


const meta: Meta<typeof FeatureCard> = {
  title: 'views/HomeView/components/FeatureSection/components/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // variant: "default",
  },
}
