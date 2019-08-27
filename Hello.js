import { render } from 'react-dom';
import React, { Component } from 'react';
import Card from './card';
import Table from './table';


export default class Hello extends Component {

  constructor(props) {

    super(props);

    this.state = {
      Youken: this.props.score,
      Result: this.props.result
    };

  }



  render() {
    return (

      <React.Fragment>

        <div class="card shadow mb-5">
          <div class="card-header py-3">
            <p class="text-primary m-0 font-weight-bold">{category}</p>
          </div>
          <div className="card-body" style={{ paddingBottom: 0 + 'px' }}>
          </div>
        </div>


        <Card score={this.state.Youken} />
        <Table result={this.state.Result} />

      </React.Fragment >

    );
  }
}

