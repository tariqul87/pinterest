import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import BookmarkIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  pinContainer: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    margin: theme.spacing(1),
    width: "100%",
  },
  imageContainer: {
    maxHeight: 400,
  },
  gridItem: {
    padding: theme.spacing(1),
  },
}));

const Pin = ({ pin, key, ...props }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.pinContainer}>
      <Grid container justify="center" spacing={2}>
        <Grid container alignItems="center" className={classes.gridItem}>
          <Grid item xs={8}>
            <Typography color="primary">
              <Link
                component="button"
                variant="h6"
                onClick={() => props.onProfileClick(pin.user.id)}
              >
                {pin.user.name}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container alignItems="center" justfy="flex-end">
              <IconButton onClick={() => props.bookMarkPin(pin.id)}>
                <BookmarkIcon />
              </IconButton>
              <Typography>Time: {Date(pin.time).toLocaleString()}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h5">{pin.title}</Typography>
        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
          <img
            src={pin.image}
            alt="pinterest_image"
            className={classes.imageContainer}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.gridItem}>
        <Typography>Tag: {pin.tag.name}</Typography>
      </Grid>

      <Grid item xs={12} className={classes.gridItem}>
        <Typography>Description: {pin.description}</Typography>
      </Grid>
    </Paper>
  );
};

export default Pin;
