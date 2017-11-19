import React, { Component } from 'react';

import './ListItem.css';

export default class ListItem extends Component {
  render () {
    console.log(this.props.data)
    return (
      <div className="ListItem" onClick={() => this.props.handleKitClick(2)}>
        <div className="Inline">
        <span className="KitName">Kit Name</span>
        <span className="StarCount">200 ⭐</span>
        </div>
        <span className="AuthorName co-2">Author Name</span>
      </div>
    );
  }
}