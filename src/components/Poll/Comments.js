import React, { useState } from "react";
import "./poll.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import commenter from "./../../assets/commenter.png";
import SendIcon from "./../../assets/send.png";
import SendActivatedIcon from "./../../assets/sendActivated.png";

const useStyles = makeStyles((theme) => ({
  commentBox: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "10px",
  },
  comment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "12.5px",
    marginBottom: "-10px",
  },
  commenter: {
    width: "30px",
    height: "28px",
    marginRight: "10px",
  },
  viewAll: {
    color: "#E71D36",
    textDecoration: "underline",
    marginBottom: "10px",
  },
  typeComment: {
    bottom: "0px",
    borderRadius: "20px",
    width: "84%",
  },
  sendIcon: {
    height: "25px",
  },
  send: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function renderComments(comments, classes, props, len) {
  // no comments yet
  if (len === 0) {
    return <div></div>;
  }

  // one comment occupies two lines, only display one
  else if (len === 1 && comments[0]["text"].length >= "50") {
    return (
      <div>
        <div className={classes.comment}>
          <img src={commenter} className={classes.commenter} alt='' />
          <p>{comments[0]["text"]}</p>
        </div>
        <div className={classes.viewAll} onClick={props.setCommentOpen}>
          View all comments &gt;
        </div>
      </div>
    );
  }
  // one comment occupies two lines, only display one
  else if (len >= 2 && comments[1]["text"].length >= "50") {
    return (
      <div>
        <div className={classes.comment}>
          <img src={commenter} className={classes.commenter} alt='' />
          <p>{comments[1]["text"]}</p>
        </div>
        <div className={classes.viewAll} onClick={props.setCommentOpen}>
          View all comments &gt;
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.comment}>
        <img src={commenter} className={classes.commenter} alt='' />
        <p>{comments[0]["text"]}</p>
      </div>
      <div className={classes.comment}>
        <img src={commenter} className={classes.commenter} alt='' />
        <p>{comments[1]["text"]}</p>
      </div>
      <div className={classes.viewAll} onClick={props.setCommentOpen}>
        View all comments &gt;
      </div>
    </div>
  );
}

export default function Comments(props) {
  const classes = useStyles();
  const [activatedIcon, setActivatedIcon] = useState(false);
  const [len, setLen] = useState(props.comments.length);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(props.comments);
  const existingComments = renderComments(comments, classes, props, len);

  console.log(">>> comments passed down to comments.js are", props.comments);

  const inputHandler = (e) => {
    if (e.target.value === "") {
      setActivatedIcon(false);
      setNewComment(e.target.value);
    } else {
      setActivatedIcon(true);
      setNewComment(e.target.value);
    }
  };

  const sendHandler = (e) => {
    //todo
    setLen(len + 1);
    let copyComments = {};
    copyComments = comments;

    copyComments[Object.keys(comments).length] = { text: newComment, likes: 0 };
    setComments(copyComments);
    setNewComment("");
    setActivatedIcon(false);
  };

  return (
    <div className={classes.commentBox}>
      {existingComments}

      <form className={classes.send}>
        <TextField
          className={classes.typeComment}
          variant='outlined'
          placeholder='Write a comment...'
          onChange={inputHandler}
          value={newComment}
        />
        {activatedIcon ? (
          <img
            className={classes.sendIcon}
            src={SendActivatedIcon}
            alt='send'
            type='submit'
            onClick={sendHandler}
          />
        ) : (
          <img className={classes.sendIcon} src={SendIcon} alt='send' />
        )}{" "}
      </form>
    </div>
  );
}
