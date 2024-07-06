import { Meta, StoryObj } from '@storybook/react';
import { NoImage } from '.';


const meta: Meta<typeof NoImage> = {
  title: 'components/NoImage',
  component: NoImage,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // rank: 1,
  },
}
