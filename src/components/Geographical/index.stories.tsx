import { Meta, StoryObj } from '@storybook/react';
import { Geographical } from '.';


const meta: Meta<typeof Geographical> = {
  title: 'components/Geographical',
  component: Geographical,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
  },
}
