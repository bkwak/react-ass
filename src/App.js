import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import './App.css';
import Table from './Table.js'
import Search from './Search.js'

const API_URL = 'https://data.townofcary.org/api/v2/catalog/datasets/parks-and-recreation-feature-map/exports/json';
const DISPLAY_FIELDS = [
  'name',
  'baseball',
  'basketball',
  'battingcages',
  'climbingropes',
  'dogpark',
  'fitnesstrail',
  'openspace',
  'picnic',
  'skatepark',
  'soccer',
  'tenniscourt',
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      cat: 'name'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({cat: value})
  }

  render() {
    return (
      <div className="App">
        <Search change={this.handleChange} fields={DISPLAY_FIELDS} selection={this.state.cat}/>
        <Table url={API_URL} fields={DISPLAY_FIELDS} selection={this.state.cat}/>
      </div>
    );
  }
}

export default App;
