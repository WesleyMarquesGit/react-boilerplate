import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'Desciption Default',
    img: 'img/code.svg'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
export const Basic: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'Title Basic',
  description: 'Desciption Basic'
}
