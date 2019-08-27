import { render } from 'react-dom';
import React, { Component } from 'react';


export default class Table extends Component {

  constructor(props) {

    super(props);

    this.state = {
      Youken: this.props.score,
      Result: this.props.result
    };

    // 使いやすいようにdataに格納
    let data = this.state.Youken;

  }



  render() {

    return (
      <React.Fragment>
        {
          (Object.keys(this.state.Youken[(this.state.Youken.length) - 1])).map((category) => (

            <div class="card shadow mb-5">
              <div class="card-header py-3">
                <p class="text-primary m-0 font-weight-bold">{category}</p>
              </div>
              <div className="card-body" style={{ paddingBottom: 0 + 'px' }}>




                <div className="row align-items-center no-gutters">
                  <div className="col mr-2">
                    <div className="row align-items-center no-gutters">
                      <div className="col mr-2">
                        <div className="text-uppercase text-info font-weight-bold text-xs mb-1"><span style={{ fontSize: 25 + 'px' },{color: '#7e4fad'}}>専門科目</span></div>
                    </div>
                    <div className="col text-right"><span style={{ fontSize: 22 + 'px' }}>45</span><span style={{ fontSize: 22 + 'px' }}>/</span><span style={{ fontSize: 22 + 'px' }}>45</span></div>
                  </div>
                </div>
              </div>




              <div className="row">
                <div className="col">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead style={{ height: 21 + 'px' }}>
                        <tr>
                          <th style={{ height: 21 + 'px' },{paddingTop: 0+'px'},{paddingBottom: 0+'px'},{color: '#7e4fad'}}><strong>卒業論文</strong></th>
                        <th style={{ height: 21 + 'px' },{paddingTop: 0+'px'},{paddingBottom: 0+'px'}}></th>
                      <th className="text-right" style={{ height: 21 + 'px' },{paddingTop: 0+'px'}}>
                                          <span style={{ paddingTop: 0 + 'px' },{paddingBottom: 0+'px'}}>6</span><span style={{ paddingTop: 0 + 'px' },{paddingBottom: 0+'px'}}>/
                                          </span><span style={{ paddingTop: 0 + 'px' },{paddingBottom: 0+'px'}}>6</span></th>
                                      </tr>
                                  </thead>
                                  <tbody>
          <tr style={{ height: 20 + 'px' }}>
            <td className="text-left width20" style={{ paddingTop: 2 + 'px' },{paddingBottom: 2+'px'},{height: 19+'px'}}>BC14908</td>
          <td className="text-left width60" style={{ paddingTop: 2 + 'px' },{paddingBottom: 2+'px'},{height: 19+'px'}}>卒業論文</td>
        <td className="text-right width20" style={{ paddingTop: 2 + 'px' },{paddingBottom: 2+'px'},{height: 19+'px'}}>2</td>
                                      </tr >
      <tr style={{ height: 20 + 'px' }}>
        <td className="text-left width20" style={{ paddingTop: 2 + 'px' },{paddingBottom: 2+'px'},{height: 19+'px'}}>BC14908</td>
      <td className="text-left width60" style={{ paddingTop: 2 + 'px' }, {paddingBottom: 2 + 'px'
  },{ height: 19 + 'px' }}> English Discussion Seminar II</td >
    <td className="text-right width20" style={{ paddingTop: 2 + 'px' }, {paddingBottom: 2 + 'px'}, { height: 19 + 'px' }}> 2</td >
                                      </tr >
  <tr style={{ height: 20 + 'px' }}>
    <td className="text-left width20" style={{ paddingTop: 2 + 'px' },{paddingBottom: 2+'px'},{height: 19+'px'}}>BC14908</td>
  <td className="text-left width60" style={{ paddingTop: 2 + 'px' }, {paddingBottom: 2 + 'px'}, { height: 19 + 'px' }}> 応用数学</td >
    <td className="text-right width20" style={{ paddingTop: 2 + 'px' }, {paddingBottom: 2 + 'px'}, { height: 19 + 'px' }}> 2</td >
                                      </tr >
                                  </tbody >
                              </table >
                          </div >
                      </div >
                  </div >

    
             </div >
        </div >
    </div >
          )
          )
        }
      </React.Fragment >
    )
  }

}

