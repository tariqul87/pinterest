import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import { fetchAllPins } from "../actions";
import { getAllPins } from "../reducers";

import Template from "../Template";
import PinList from "../components/PinList";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    width: "100%",
  },
}));

const Dashboard = (props) => {
  const [pins, setPins] = useState([]);
  const classes = useStyles();

  const initialize = () => {
    props.fetchAllPins();
  };

  const updatePins = () => {
    console.log(props.allPins);
    setPins(props.allPins);
  };

  useEffect(initialize, []);
  useEffect(updatePins, [props.allPins]);
  return (
    <Template {...props}>
      <Grid container spacing={2} className={classes.container}>
        <PinList pins={pins} />
      </Grid>
    </Template>
  );
};

const mapStateToProps = (state) => ({
  allPins: getAllPins(state),
});
const mapDispatchToProps = {
  fetchAllPins,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
