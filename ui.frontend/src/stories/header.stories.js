import React from 'react';
import { AppHeader } from '../components/AppHeader/AppHeader';

export default {
  title: 'Example/App header',
  component: AppHeader,
};


const temp2 = (args) => <AppHeader {...args} />;

export const ReverseColumn = temp2.bind({});
ReverseColumn.args = {
    "logo": "/assets/images/app-logo.png",
};
