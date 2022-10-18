import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FolderTree } from './folder-tree';

const Story: ComponentMeta<typeof FolderTree> = {
  component: FolderTree,
  title: 'FolderTree',
};
export default Story;

const Template: ComponentStory<typeof FolderTree> = (args) => (
  <FolderTree {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
