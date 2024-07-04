import { Meta, StoryObj } from '@storybook/react';
import { NextCheckPoint } from '.';


const meta: Meta<typeof NextCheckPoint> = {
  title: 'views/HomeView/components/NextCheckPoint',
  component: NextCheckPoint,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // variant: "default",
  },
}
