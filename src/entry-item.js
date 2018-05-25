import React from 'react';
import Votes from './votes';
import Time from './time';
import Title from './title';
import Comment from './comment';
import Buttons from './buttons';
import './entry-item.css';

const EntryItem = ({ entry, onAddVote, onRemoveVote }) => {
    return (
        <div className="entry-item">
            <Votes 
                num_votes={entry.num_votes}
                onAddVote={() => onAddVote(entry.id)}
                onRemoveVote={() => onRemoveVote(entry.id)} />
            <img className="entry-img" alt="img" src={entry.thumbnail} />
            <div className="entry-body">
                <div className="entry-head">
                    <Title title={entry.title} url={entry.url} />
                    <div className="entry-submit">Submitted <Time time={entry.time}/> by <span className="entry-author">{entry.author}</span></div>
                </div>
                <div className="entry-foot">
                    <Comment num_comments={entry.num_comments} /> <Buttons />
                </div>
            </div>
        </div>
    );
}
export default EntryItem;