import React, { Component } from 'react';
import EntryList from './entry-list';
import {entries} from './static-data';
import './App.css';

class App extends Component {
  state = {entries: []};
  constructor(props){
    super(props);
    this.state.entries = entries.map(entry => {
      let obj = {};
      obj['id'] = entry.id;
      obj['title'] = entry.title;
      obj['url'] = entry.url;
      obj['num_votes'] = entry.score;
      obj['num_comments'] = entry.num_comments;
      obj['author'] = entry.author;
      obj['thumbnail'] = entry.thumbnail;
      return obj;
    });
    this.state.entries = this.state.entries.sort((a,b) => (b.num_votes - a.num_votes));
  }
  handleAddVote = (id) => {
    let entryindex = this.state.entries.findIndex((entry) => (entry.id === id));
    let entries = this.state.entries;
    entries[entryindex].num_votes = entries[entryindex].num_votes + 1;
    this.setState({
      entries: entries
    });
  }
  handleRemoveVote = (id) => {
    let entryindex = this.state.entries.findIndex((entry) => (entry.id === id));
    let entries = this.state.entries;
    entries[entryindex].num_votes = entries[entryindex].num_votes - 1;
    this.setState({
      entries: entries
    });
  }
  render() {
    return (
      <div className="App">
        <EntryList 
          entries={this.state.entries} 
          onAddVote={this.handleAddVote} 
          onRemoveVote={this.handleRemoveVote} />
      </div>
    );
  }
}

export default App;
