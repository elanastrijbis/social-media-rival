import React from "react";
import styles from "./LandingHeader.module.css";

export default function LandingHeader() {
  return (
    <div className={styles.LandingHeaderContainer}>
      <h1 className={styles.header}>
        Imagine if <span className={styles.headerSnapchat}>Snapchat</span> had
        events.
      </h1>
      <p>
        Easily host and share events with your friends across any social media.
      </p>
      <a className={styles.eventLink} href="/event">
        🎉 Create my event
      </a>
    </div>
  );
}
