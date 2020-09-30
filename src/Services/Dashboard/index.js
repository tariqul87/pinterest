import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Dashboard = (props) => {
  const [text, setText] = useState("This is Dashboard");

  const changeTextButtonHandler = () => {
    setText("Text is now changed!");
  };

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

export default Dashboard;
