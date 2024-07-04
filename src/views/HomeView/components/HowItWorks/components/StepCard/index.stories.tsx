import { Meta, StoryObj } from '@storybook/react';
import { StepCard } from '.';


const meta: Meta<typeof StepCard> = {
  title: 'views/HomeView/components/HowItWorks/components/StepCard',
  component: StepCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // variant: "default",
  },
}
