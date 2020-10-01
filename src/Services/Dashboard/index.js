import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { fetchTestData } from "../actions";

const Dashboard = (props) => {
  const [text, setText] = useState("This is Dashboard");

  const changeTextButtonHandler = () => {
    setText("Text is now changed!");
  };

  const initialize = () => {
    console.log("asdf");
    props.fetchTestData();
  };

  useEffect(initialize, []);
  return (
    <Grid container spacing={2}>
      <Typography variant="h2" color="primary" id="header">
        {text}
      </Typography>
      <Grid item xs={12}>
        <Button
          color="primary"
          variant="outlined"
          id="changeTextButton"
          onClick={changeTextButtonHandler}
        >
          Test me!
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  fetchTestData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
