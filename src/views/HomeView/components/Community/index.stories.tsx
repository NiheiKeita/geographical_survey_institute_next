import { Meta, StoryObj } from '@storybook/react';
import { Community } from '.';


const meta: Meta<typeof Community> = {
  title: 'views/HomeView/components/Community',
  component: Community,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // variant: "default",
  },
}
