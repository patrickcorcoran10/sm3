import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Opportunities from '../../pages/Opportunities/Opportunities';
import Form from '../../pages/Form/Form';


export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                id: '',
                companyName: '',
                totalEmployees: 0,
                hourlyCostPerEmployee: 0,
                avgHoursCollecting: 0,
                avgHoursAnalyzing: 0,
                dataBreachRisk: '',
                avgEmailTraffic: 0,
                email: ''
            }
        };
    }

  render() {
    return (
      <div className='parent'>  
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/form' component={Form}/>
      <Route exact path='/opportunities' component={Opportunities}/>
      </div>
    )
  }
}
