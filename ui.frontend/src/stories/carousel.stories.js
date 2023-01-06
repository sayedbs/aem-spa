import React from 'react';
import { Carousel } from '../components/Carousel/Carousel';

export default {
  title: 'Example/Carousel',
  component: Carousel,
};


const temp2 = (args) => <Carousel {...args} />;

export const ReverseColumn = temp2.bind({});
ReverseColumn.args = {
    
};
