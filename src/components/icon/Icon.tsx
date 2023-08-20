import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropstype = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropstype) => {
    return (
            <svg width= {props.width || '16'} height={props.height || '17'} viewBox={props.viewBox || "0 0 16 17"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={ `${iconsSprite}#${props.iconId}` } />
            </svg>
    );
};

