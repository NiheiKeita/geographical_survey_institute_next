import { Meta, StoryObj } from '@storybook/react';
import { HowItWorks } from '.';


const meta: Meta<typeof HowItWorks> = {
  title: 'views/HomeView/components/HowItWorks',
  component: HowItWorks,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // variant: "default",
  },
}
