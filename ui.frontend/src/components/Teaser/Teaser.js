import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

import "./Teaser.scss";

export const TeaserEditConfig = {

    emptyLabel: 'teaser',

    isEmpty: function(props) {
        return !props || !props.content;
    }
};

export const Teaser = ({reverseColumn,...props}) =>{
    return (
        <div className={`teaser${reverseColumn? ' teaser-reverse-column':''}`}>
            <div className='teaser-text' dangerouslySetInnerHTML={{__html: props.content||''}}></div>
            <div className='text-image'>
                <img src={props.imgSrc} alt='image' />
            </div>
        </div>
    );
}

MapTo('wknd-spa-react/components/teasercomponent')(Teaser, TeaserEditConfig);