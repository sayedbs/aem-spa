import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

import "./TextImage.scss";

export const TextImageEditConfig = {

    emptyLabel: 'TextImage',

    isEmpty: function(props) {
        return !props || !props.content;
    }
};

export const TextImage = ({reverseColumn,...props}) =>{
    return (
        <div className={`text-image${reverseColumn? ' text-image--reverse-column':''}`}>
            <div className='text-image--text' dangerouslySetInnerHTML={{__html: props.content||''}}></div>
            <div className='text-image--image'>
                <img src={props.imgSrc} alt='image' />
            </div>
        </div>
    );
}

MapTo('wknd-spa-react/components/headlinetext')(TextImage, TextImageEditConfig);