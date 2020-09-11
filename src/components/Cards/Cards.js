import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  StylesProvider,
} from "@material-ui/core";

const Cards = (props) => {
  console.log(props.data.lastUpdate);
  if (!props.data.confirmed) {
    return "Loading........";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="centre">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography variant="h4" color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5 ">
              <CountUp
                start={0}
                end={props.data.confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" variant="h5">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h5">
              Number of Active Cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography variant="h4" color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5 ">
              <CountUp
                start={0}
                end={props.data.recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" variant="h5">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h5">
              Number of Recovered Cases from Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography variant="h4" color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5 ">
              <CountUp
                start={0}
                end={props.data.deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography variant="h5" color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h5">
              Number of Deaths Caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
