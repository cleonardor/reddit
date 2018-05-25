import React from 'react';
import EntryItem from './entry-item';
import './entry-list.css';

const EntryList = ({ entries, onAddVote, onRemoveVote }) => {
    return (
        <ul className="entry-list-items">
            {entries.map(entry => 
                <li key={entry.id} className="entry-list-item">
                  <EntryItem 
                    entry={entry}
                    onAddVote={onAddVote}
                    onRemoveVote={onRemoveVote} />
                </li>
            )}
        </ul>
    );
}
export default EntryList;