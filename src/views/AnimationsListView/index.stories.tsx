import { Meta, StoryObj } from '@storybook/react';
import { AnimationsListView } from '.';

const meta: Meta<typeof AnimationsListView> = {
  title: 'views/AnimationsListView',
  component: AnimationsListView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "1",
  },
}
