import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logoDrawing from "./../assets/logo-image.png";
import logoText from "./../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2EC4B6",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  // const sendDataSample = () => {
  //   axios
  //     .post(
  //       "https://us-central1-curiocity-282815.cloudfunctions.net/load-polls-homepage/.json",
  //       {
  //         userid: "c4a3d50d-01a2-434d-9516-9333496b4732",
  //         location: { latitude: 18, longitude: 77 },
  //       }
  //     )
  //     .then((response) => {
  //       console.log("it worked!", response);
  //     })
  //     .catch((error) => {
  //       console.log("it failed", error);
  //     });
  // };

  // useEffect(() => {
  //   sendDataSample();
  // }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logoDrawing} width="309px" height="182px" alt="" />
        <img src={logoText} width="309px" height="182px" alt="" />
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                id="firstName"
                label="Email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                // fullWidth
                id="lastName"
                label="Password"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
          </Grid>
          <Link to="/StartPoll">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log in
            </Button>
          </Link>
          <Grid container justify="flex-end">
            <Grid item>
              Don't have an account?{" "}
              <Link to="/Registration-personal-info">Register here</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
