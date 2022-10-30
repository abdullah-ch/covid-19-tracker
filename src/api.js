import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const apiData = async (country) => {
  let customUrl = url;
  if (country) {
    customUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(customUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const apiDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log('Daily data isssssssssssssssss', data);
    const apiDataDaily = data.map((data) => ({
      confirmed: data.confirmed.total,
      deaths: data.deaths.total,
      reportDate: data.reportDate,
    }));

    return apiDataDaily;
  } catch (error) {
    console.log(error);
  }
};

export const apiCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const countriesName = countries.map((countries) => ({
      name: countries.name,
    }));
    return countriesName;
  } catch (error) {
    console.log(error);
  }
};
