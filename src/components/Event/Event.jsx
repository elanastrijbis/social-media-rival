import React from "react";
import styles from "./Event.module.css";
import EventArt from "../EventArt/EventArt";
import EventInput from "../EventInput/EventInput";

export default function Event() {
  return (
    <div className={styles.eventContainer}>
      <EventInput />
      <EventArt />
    </div>
  );
}
