import React from 'react';
//import Cards from './components/Cards/Cards';
//import Charts from './components/Charts/Charts';
//import CountryPicker from './components/CountryPicker/CountryPicker';
import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.webp';


class App extends React.Component {
  
  state = {
    data: {},
    country: '',

  }
  async componentDidMount () {
    const fetchedData = await fetchData();
    
    this.setState({ data : fetchedData});
  }
  
  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({data: fetchedData, country: country});

    //fetch data
    //set the state
  }
  
 
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        
      
        <img src={coronaImage} className={styles.image} alt="CoronaVirus Image"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      </div>
    )
  }
}

export default App;
