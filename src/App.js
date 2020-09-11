import React, { useEffect, useState } from "react";

import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { apiData } from "./api";
import styles from "./App.module.css";

const App = () => {
  const [apiDataa, setApiDataa] = useState("");
  const [apiCountryChange, setApiCountryChange] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await apiData();
      setApiDataa(data);
    }
    fetchData();
  }, []);

  async function handleCountryChange(country) {
    console.log(country);
    const data = await apiData(country);
    console.log(`Broo, ${country} data is`, data);
    setApiDataa(data);
    setApiCountryChange(country);
  }

  return (
    <div className={styles.container}>
      <h1 className = {styles.heading}>COVID-19 Tracker</h1>
      <Cards data={apiDataa} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={apiDataa} country ={apiCountryChange} />
    </div>
  );
};

export default App;
