import React, { Component } from 'react';
import '../Form/Form.css';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {}
        }
        // this.acceptTotalEmployee = this.acceptTotalEmployee.bind(this);
        // this.submitAndAdvance = this.submitAndAdvance.bind(this);
        // this.acceptHourlyCostPerEmployee = this.acceptHourlyCostPerEmployee.bind(this);
        // this.acceptCompanyName = this.acceptCompanyName.bind(this);
    };
    acceptCompanyName = e => {
        this.setState({
            inputs: {
                companyName: this.refs.companyName.value,
            }
        })
        console.log(this.state);
    };
    acceptTotalEmpoyee = e => {
        this.setState({
            inputs: {
                totalEmployees: this.refs.totalEmployees.value,
            }
        })
    };
    acceptHourlyCostPerEmployee = e => {
        this.setState({
            inputs: {
                hourlyCostPerEmployee: this.refs.hourlyCostPerEmployee.value,
            }
        })
    }

    submitAndAdvance = e => {
        console.log("a click in the wilderness", this.refs.companyName.value);
        e.preventDefault();
        axios.post('/api/submit', {
            companyName: this.refs.companyName.value,
            totalEmployees: this.refs.totalEmployees.value,
            hourlyCostPerEmployee: this.refs.hourlyCostPerEmployee.value,
            avgHoursCollecting: null,
            avgHoursAnalyzing: null,
            dataBreachRisk: null,
            avgEmailTraffic: null,
            email: null
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error)
        });
    };
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <p>Form Page</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-3'>
            </div>
            <div className='col-md-6'>
                <p>Company Name</p>
                <input ref='companyName' onChange={this.acceptCompanyName}/>
                <hr />
                <p>Number of Employees</p>
                <input ref='totalEmployees' onChange={this.acceptTotalEmployee}/>
                <hr />
                <p>Hourly Cost Per Employee</p>
                <input type='currency' ref='hourlyCostPerEmployee' onChange={this.acceptHourlyCostPerEmployee}/>
                <hr />
                <img alt='arrow' src='../../assets/arrow_right_green.png' />
                <button className='button1' onClick={this.submitAndAdvance}>Next</button>
            </div>
            <div className='col-md-3'>
            </div>
        </div>
      </div>
    )
  }
}
