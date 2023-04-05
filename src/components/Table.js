import React, { Component } from 'react';

import './Table.css'

class Table extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>25</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>30</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>40</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;