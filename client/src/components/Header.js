import React from 'react';

export const Header = ({type, children}) => {
    return React.createElement(`h${type}`, {}, children);
};
