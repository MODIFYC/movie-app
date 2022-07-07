import React from "react";
// import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import styles from "./SearchMovie.module.css";

function SearchMovie({id, year, title, poster, rating, director, actor}) {
  return (
    <div className={styles.movie}>
    <a href={id} target="_blank">
      <img src={poster} alt={title} titlt={title} className={styles.movie__img}></img>
    <div className={styles.movie__data}>
      <h3 className={styles.movie__title}>{
          title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
        }</h3>
      <p className={styles.movie__rating}>
        <span>평점</span> {rating}/10
      </p>
      <p className={styles.movie__year}>
        <span>개봉일</span> {year}
      </p>
    <p className={styles.movie__director}>
      <span>감독</span> {director}
    </p>
    <p className={styles.movie__actor}>
      <span>배우</span> {actor}
    </p>
    </div>
  </a>
  </div>
  )
};

SearchMovie.propTypes = {
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired

};

export default SearchMovie;