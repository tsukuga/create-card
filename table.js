import { render } from 'react-dom';
import React, { Component } from 'react';


export default class Table extends Component {

  constructor(props) {

    super(props);

    this.state = {
      Youken: this.props.score
    };

    // 使いやすいようにdataに格納
    let data = this.state.Youken;

  }



  render() {

    return (
      <React.Fragment>
        {
          (Object.keys(this.state.Youken[(this.state.Youken.length) - 1])).map((category) => (

            <div className="col-md-6 col-xl-3 mb-4">
              <div className="card shadow border-left-info py-2">
                <div className="card-body">
                  <div className="row align-items-center no-gutters">
                    <div className="col mr-2">
                      <div className="text-uppercase text-info font-weight-bold text-xs mb-1" style={{ fontSize: 25 + 'px' }}><span style={{ color: '#7e4fad' }}>{category}</span></div>
                    </div>
                    <div className="col" style={{ color: '#7e4fad' }}><span style={{ fontSize: 37 + 'px' }}>{this.state.Youken[(this.state.Youken.length) - 2][category]}</span><span style={{ fontSize: 37 + 'px' }}>/</span><span style={{ fontSize: 37 + 'px' }}>{this.state.Youken[(this.state.Youken.length) - 1][category]}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )
          )
        }
      </React.Fragment>
    )
  }

}

