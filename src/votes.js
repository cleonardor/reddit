import React from 'react';
import './votes.css';

const Votes = ({ num_votes, onAddVote, onRemoveVote }) => {
    return (
        <div className="votes">
            <button onClick={onAddVote} className="votes-add"><i className="fa fa-arrow-up" /></button>
            <span className="votes-num">{num_votes}</span>
            <button onClick={onRemoveVote} className="votes-remove"><i className="fa fa-arrow-down" /></button>
        </div>
    );
}
export default Votes;