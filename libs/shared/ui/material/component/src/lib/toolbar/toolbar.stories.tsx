import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toolbar } from './toolbar';

const Story: ComponentMeta<typeof Toolbar> = {
  component: Toolbar,
  title: 'Toolbar',
};
export default Story;

const Template: ComponentStory<typeof Toolbar> = (args) => (
  <Toolbar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
