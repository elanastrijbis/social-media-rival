import React from "react";
import styles from "./MovieInfo.module.css";
import movieInfoImage from "./assets/movieInfoImage.png";

export default function MovieInfo() {
  return (
    <div className={styles.MovieInfoContainer}>
      <img
        className={styles.movieInfoImage}
        src={movieInfoImage}
        alt="Information about a movie night"
      />
    </div>
  );
}
