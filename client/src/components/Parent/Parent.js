import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {}
        };
    }

  render() {
    return (
      <div className='parent'>  
      <Navbar />
      <Route exact path='/'/>
      <Route exact path='/form'/>
      <Route exact path='/opportunities'/>
      </div>
    )
  }
}
