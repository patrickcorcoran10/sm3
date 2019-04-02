import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Opportunities from '../../pages/Opportunities/Opportunities';
import Form from '../../pages/Form/Form';
import FormTwo from '../../pages/FormTwo/FormTwo';
import FormThree from '../../pages/FormThree/FormThree';


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
    };
    firstForm = id => {
        this.setState({
            inputs: {
                id: id,
            }
        })
    };

    secondForm = id => {
        this.setState({
            inputs: id
        })
    };
    submit = id => {
        this.setState({
            id: id
        })
    }



  render() {
    return (
      <div className='parent'>  
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/form-one' component={Form}/>
      <Route exact path='/form-two' component={FormTwo}/>
      <Route exact path='/form-three' component={FormThree}/>
      <Route exact path='/opportunities' component={Opportunities}/>
      </div>
    )
  }
}
