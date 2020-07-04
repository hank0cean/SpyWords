import React, { Component } from 'react';
import Card from './card'

import './../styles/board.css'

class Board extends Component {

  renderRow(id_number) {
    const id = 'row-' + id_number;

    return (
      <div className="boardRow" id={id}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      // {this.renderCard()}
    );
  }

  render() { 
    return ( 
      <div className="board">
        {this.renderRow(1)}
        {this.renderRow(2)}
        {this.renderRow(3)}
        {this.renderRow(4)}
        {this.renderRow(5)}
      </div>
    );
  }
}
 
export default Board;
