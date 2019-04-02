import React, { Component } from 'react'

export default class FormTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {},
        }
    };
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>
                <p>Form 2</p>
            </div>
            <div className='col-md-4'>
                
            </div>
        </div>
        
      </div>
    )
  }
}