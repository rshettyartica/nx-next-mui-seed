import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chart } from './chart';

const Story: ComponentMeta<typeof Chart> = {
  component: Chart,
  title: 'Chart',
};
export default Story;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
};
