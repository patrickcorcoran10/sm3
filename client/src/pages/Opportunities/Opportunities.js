import React, { Component } from 'react';
import '../Opportunities/Opportunities.css';

export default class Opportunities extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h6>Opportunities Display Page</h6>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-2'>

            </div>
            <div className='col-md-8'>
                <table>
                    <th>
                        <td>Company Name</td>
                        <td>Email</td>
                        <td>Employees</td>
                        <td>Revenue</td>
                        <td>Revenue Potential</td>
                    </th>
                </table>
            </div>
            <div className='col-md-2'>
                
            </div>
        </div>
      </div>
    )
  }
}
