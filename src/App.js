import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import axios from 'axios';
import Countries from './Countries/Countries';

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
    };
  }

  componentWillMount() {
    // TODO cache it
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      this.setState({ countries: response.data });
      localStorage.setItem('countries', JSON.stringify(response.data));
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    if (!navigator.onLine) {
      this.setState({ countries: JSON.parse(localStorage.getItem('countries')) });
    }
  }

  render() {
    return (
      <div className="App">
        <Countries countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
