import React, { useEffect, useState } from "react";
import { apiCountries } from "../../api";
import {
  NativeSelect,
  FormControl,
} from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [apiCountry, setApiCountry] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await apiCountries();
      setApiCountry(data);
    }
    fetchData();
  }, [setApiCountry]);

  console.log(apiCountry);
  return (
    <div className={styles.container}>
      <FormControl className={styles.container}>
        <NativeSelect
          onChange={(event) => {
            handleCountryChange(event.target.value);
          }}
        >
          <option value="">Global</option>
          {apiCountry.map((name) => (
            <option value={name.name}>{name.name}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
