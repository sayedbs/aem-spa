import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

require('./Image.scss');

export const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};

export  const Image = props => {
// export default class Image extends Component {

    const content =()=> {
        return <img
                className="Image-src"
                src={props.src}
                alt={props.alt}
                title={props.title ? props.title : props.alt} />;
    }

    if(ImageEditConfig.isEmpty(props)) {
        return null;
    }

    return (
            <div className="Image">
                {content()}
            </div>
    );
}
MapTo('wknd-spa-react/components/image')(Image, ImageEditConfig);