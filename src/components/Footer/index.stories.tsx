import { Meta, StoryObj } from '@storybook/react';
import { Footer } from '.';


const meta: Meta<typeof Footer> = {
  title: 'components/Footer',
  component: Footer,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // variant: "default",
  },
}
export const Blue: Story = {
  args: {
    variant: "blue",
  },
}
export const Gray: Story = {
  args: {
    variant: "black",
  },
}
