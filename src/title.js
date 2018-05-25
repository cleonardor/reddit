import React from 'react';
import './title.css';

const Title = ({ title, url }) => {
    return <a className="title" href={url}>{title}</a>
};
export default Title;