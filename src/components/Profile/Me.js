import React, { useState } from "react";
import logoSmall from "./../../assets/logoSmall.png";
import home from "./../../assets/home.png";
import trending from "./../../assets/trending.png";
import profile from "./../../assets/profile.png";
import addPoll from "./../../assets/addPoll.png";
import saveIcon from "./../../assets/save.png";
import vectorRight from "./../../assets/vector-right.png";
import logoGray from "./../../assets/logoGray.png";
import locationPin from "./../../assets/locationPin.png";
import avatar from "./../../assets/avatar.png";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { shadows } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import ScrollContainer from "react-indiana-drag-scroll";
import PollGrid from "./PollGrid";
import TabPanel from "@material-ui/lab/TabPanel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import SwipeableViews from "react-swipeable-views";

const useStyle = makeStyles((theme) => ({
  paper: {
    fontFamily: "Futura",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "700px", //TODO: set hight to be phone height
  },
  topBar: {
    paddingLeft: "10%",
    paddingRight: "10%",
    zIndex: "-1",
    display: "flex",
    width: "100%",
    height: "50px",
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    width: "20px",
  },
  box: {
    borderRadius: "10px",
    width: "90%",
    height: "87%",
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    top: "10%",
  },
  boxTopBar: {
    width: "100%",
    height: "30px",
    backgroundColor: "rgba(150, 150, 150, 0.57)",
    borderRadius: "12px 12px 0px 0px",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    position: "relative",
  },
  formRow: {
    width: "305px",
    display: "flex",
    justifyContent: "space-between",
  },
  choiceGrid: {
    display: "flex",
    position: "absolute",
    marginTop: "1000px",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  category: {
    fontWeight: "bold",
    fontSize: "15px",
  },
  question: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    height: "40px",
  },
  comments: {
    display: "flex",
    position: "absolute",
  },
  profile: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    marginTop: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarIcon: {
    zIndex: "2",
    position: "absolute",
    marginTop: "10px",
  },
  logoGray: {
    zIndex: "1",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  locationPin: {
    width: "16px",
    height: "25px",
    marginRight: "10px",
  },
  polls: {
    display: "flex",
    width: "90%",
    height: "54%",
    position: "absolute",
    bottom: "5%",
    justifyContent: "center",
  },
  pollsScroll: {},
  appBar: {
    border: "1px solid pink",
    width: "100%",
    padding: "0",
  },
}));

export default function Me(props) {
  const classes = useStyle();
  const numSavedPolls = props.polls.saved.length;
  const numPostedPolls = props.polls.posted.length;

  const [page, setPage] = useState("posted");

  const changeHandler = () => {
    if (page === "posted") {
      setPage("saved");
    } else {
      setPage("posted");
    }
  };

  function a11yProps(index) {
    return {
      id: `${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  const displayPolls = (polls) => {
    const saved = polls.saved;
    const posted = polls.posted;
    return (
      <div className={classes.polls} role='tabpanel'>
        <AppBar position='static' className={classes.appBar}>
          <Tabs
            onChange={changeHandler}
            indicatorColor='white'
            textColor='gray' //todo
            variant='fullWidth'
            aria-label='poll tab'
          >
            <Tab label='My polls' {...a11yProps(0)} />
            <Tab label='Saved Polls' {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews onChangeIndex={changeHandler}>
          {/* <TabPanel value='1' index={0}>
            one
          </TabPanel>
          <TabPanel value='2' index={1}>
            two
            <ScrollContainer className={classes.pollsScroll}>
              two
            </ScrollContainer>
          </TabPanel> */}
        </SwipeableViews>
      </div>
    );
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.topBar}>
          <img src={home} />
          <img src={trending} />
          <img src={logoSmall} className={classes.logo} width='100px' alt='' />
          <img src={addPoll} />
          <img src={profile} />
        </div>

        <div className={classes.profile}>
          <Grid className={classes.avatar}>
            <img src={logoGray} class={classes.logoGray} />
            <img src={avatar} class={classes.avatarIcon} />
          </Grid>
          <h2 className={classes.name}>{props.name}</h2>
          <Grid className={classes.location}>
            <img src={locationPin} className={classes.locationPin} />
            <p>{props.location}</p>
          </Grid>
        </div>

        {displayPolls(props.polls)}
      </div>
    </Container>
  );
}