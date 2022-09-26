import React from "react";
import styles from "./EventArt.module.css";
import birthdaycakeImage from "./assets/birthdaycake.png";

export default function EventArt() {
  return (
    <div className={styles.EventArtContainer}>
      <img
        className={styles.birthdaycakeImage}
        src={birthdaycakeImage}
        alt="Information about a movie night"
      />
    </div>
  );
}
