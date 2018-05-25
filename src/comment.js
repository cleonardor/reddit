import React from 'react';
import './comment.css';

const Comment = ({ num_comments }) => {
    return <span className="comments">{num_comments} comments</span>
};
export default Comment;