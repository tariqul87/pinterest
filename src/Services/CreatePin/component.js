import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
  },
  formControl: {
    width: "100%",
  },
  image: {
    maxWidth: "100%",
    maxHeight: 400,
  },
  hidden: {
    display: "None",
  },
}));

const CreatePinComponent = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="primary">
                Create Pin
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                color="secondary"
                variant="contained"
                onClick={() =>
                  document.getElementById("create-pin-input").click()
                }
              >
                Upload Image
              </Button>
              <input
                id="create-pin-input"
                type="file"
                onChange={(event) => {
                  props.imageChangeListener(event.target.files[0]);
                  event.target.value = "";
                }}
                className={classes.hidden}
              />
            </Grid>
            {props.image && (
              <Grid item xs={12}>
                <img
                  src={props.image}
                  alt="create-pin"
                  className={classes.image}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="title"
                value={props.title}
                onChange={(event) => props.setTitle(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="tag-select-label">Tags</InputLabel>
                <Select
                  variant="outlined"
                  labelId="tag-select-label"
                  id="tag-select"
                  fullWidth
                  value={props.tag}
                  onChange={(event) => props.setTag(event.target.value)}
                >
                  {props.tags.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                rows={4}
                value={props.description}
                onChange={(event) => props.setDescription(event.target.value)}
                label="Description"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              {props.isPinCreated && <Typography>Pin Created!</Typography>}
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.createPin}
                >
                  Create Pin
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreatePinComponent;
