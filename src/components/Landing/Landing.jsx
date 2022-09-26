import React from "react";
import styles from "./Landing.module.css";
import MovieInfo from "../MovieInfo/MovieInfo";
import LandingHeader from "../LandingHeader/LandingHeader";

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <MovieInfo />
      <LandingHeader />
    </div>
  );
}
