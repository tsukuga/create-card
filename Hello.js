import { render } from 'react-dom';
import React, { Component } from 'react';
import Card from './card';
import Table from './table';


export default class Hello extends Component {

  constructor(props) {

    super(props);

    this.state = {
      Youken: this.props.score
    };

  }

  

  render() {
    return (

      <React.Fragment>
     <Card score={this.state.Youken}/>
     <Table score={this.state.Youken}/>
      </React.Fragment>

    );
  }
}

