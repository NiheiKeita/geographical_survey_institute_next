import { Meta, StoryObj } from '@storybook/react';
import { TestimonialCard } from '.';


const meta: Meta<typeof TestimonialCard> = {
  title: 'views/HomeView/components/Testimonials/components/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // variant: "default",
  },
}
