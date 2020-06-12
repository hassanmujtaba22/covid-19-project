import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <>
      <div className={styles.container}>
        <h2>COVID-19 Tracker App</h2>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </div>
      <p className={styles.Copyright}>All Copyright &#169; reserved to <strong>Hassan Mujtaba</strong>.</p>
      </>
    );
  }
}

export default App;