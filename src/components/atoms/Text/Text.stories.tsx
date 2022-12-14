import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'txt-default',
    children: 'Default',
};

