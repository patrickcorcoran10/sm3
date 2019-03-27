import React, { Component } from 'react';
import '../Home/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-1'>
            </div>
            <div className='col-md-3'>
                <div className='box'>
                    <h6>New Opportunities Created</h6>
                    <h6>##</h6>
                </div>
            </div>
            <div className='col-md-1'>
            </div>
            <div className='col-md-3'>
                <div className='box'>
                    <h6>Potential Monthly Revenue</h6>
                    <h6>##</h6>
                </div>
            </div>
            <div className='col-md-1'>
                
            </div>
            <div className='col-md-3'>
                <div className='box'>
                    <h6>Opportunities Started/Completed</h6>
                    <h6>##</h6>
                </div>
            </div>
        </div>
        <hr />
        <div className='row'>
            <div className='col-md-1'>

            </div>
            <div className='col-md-10'>
                <div className='chart'>
                    <h6>Here lies the Graph</h6>
                </div>
            </div>
            <div className='col-md-1'>

            </div>
        </div>
      </div>
    )
  }
}
