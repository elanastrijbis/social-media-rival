import React from "react";
import styles from "./EventInput.module.css";
import calendarIcon from "./assets/calendarIcon.png";
import locationIcon from "./assets/locationIcon.png";
import stroke from "./assets/stroke.png";

export default function EventInput() {
  return (
    <div className={styles.eventInputOuterContainer}>
      <div className={styles.header}>
        <h1>Birthday Bash</h1>
        <h2>Hosted by Elysia</h2>
      </div>
      <div className={styles.details}>
        <div className={styles.dateContainer}>
          <img
            className={styles.calendarIcon}
            src={calendarIcon}
            alt="calendar icon"
          />
          <div className={styles.dateDetails}>
            <p className={styles.detailsHeader}>18 August 6:00PM</p>
            <p className={styles.detailsDescription}>
              to 19 August 1:00PM UTC +10
            </p>
          </div>
          <img className={styles.stroke} src={stroke} alt="calendar icon" />
        </div>
        <div className={styles.locationContainer}>
          <img
            className={styles.locationIcon}
            src={locationIcon}
            alt="location icon"
          />
          <div className={styles.locationDetails}>
            <p className={styles.detailsHeader}>Street name</p>
            <p className={styles.detailsDescription}>Suburb, State, Postcode</p>
          </div>
          <img className={styles.stroke} src={stroke} alt="calendar icon" />
        </div>
      </div>
    </div>
  );
}
