import React from 'react';
import { Image } from '../components/Image/Image';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Image',
  component: Image,
};


const temp2 = (args) => <Image {...args} />;

export const ReverseColumn = temp2.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ReverseColumn.args = {
    src: "/mock-content/adobestock-140634652.jpeg",
    alt: "image",
    title: "this is demo image for image component"
};
