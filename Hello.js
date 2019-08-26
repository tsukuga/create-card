import { render } from 'react-dom';
import React, { Component } from 'react';
import Card from './card';

export default class Hello extends Component {

  constructor(props) {

    super(props);

    this.state = {
      Youken: this.props.score
    };

  }

  

  render() {
    return (
     <Card score={this.state.Youken}/>
    );
  }
}

