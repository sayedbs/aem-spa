import React from 'react';
import { TextImage } from '../components/TextImage/TextImage';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Text image',
  component: TextImage,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextImage {...args} />;

export const defaultColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
defaultColumn.args = {
    content: "<h2>Zakaria</h2> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>",
    imgSrc: "/mock-content/adobestock-140634652.jpeg",
    reverseColumn: false,
};


const temp2 = (args) => <TextImage {...args} />;

export const ReverseColumn = temp2.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ReverseColumn.args = {
    content: "<h2>Zakaria</h2> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>",
    imgSrc: "/mock-content/adobestock-140634652.jpeg",
    reverseColumn: true,
};
