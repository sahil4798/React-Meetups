import { Fragment } from "react";

import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <Fragment>
      <section className={classes.detail}>
        <img src={props.meetup.image} />
        <h1>{props.meetup.title}</h1>
        <address>{props.meetup.address}</address>
        <p>{props.meetup.description}</p>
      </section>
    </Fragment>
  );
}

export default MeetupDetail;
