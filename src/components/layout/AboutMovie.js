import React, { useState } from "react";
import DetailMovie from "./DetailMovie";
import Footer from './Footer';
import styles from '../../assets/styles/aboutmovie.module.css';

const AboutMovie = () => {
  const [btnActive, setBtnActive] = useState({
    overview: true,
    review: false,
    casts: false
  });

  const [num, setNum] = useState(1);

  const reviewbtn = e => {
    setBtnActive({
      overview: false,
      review: true,
      casts: false
    });
    setNum(3);
  };

  const castsbtn = () => {
    setBtnActive({
      overview: false,
      review: false,
      casts: true
    });
    setNum(2);
  };

  const overviewbtn = () => {
    setBtnActive({
      overview: true,
      review: false,
      casts: false
    });
    setNum(1);
  };

  return (
    <React.Fragment>
      <div className={styles.about__movie}>
        <div className={styles.about__movie__btn}>
          <button
            onClick={overviewbtn}
            className={
              btnActive.overview ? styles.button_inactive : styles.button_active
            }
          >
            Overview
          </button>
          <button
            onClick={castsbtn}
            className={btnActive.casts ? styles.button_inactive : styles.button_active}
          >
            Characters
          </button>
          <button
            onClick={reviewbtn}
            className={btnActive.review ? styles.button_inactive : styles.button_active}
          >
            Review
          </button>
        </div>
      </div>
      <DetailMovie change={num} />
      <Footer />
    </React.Fragment>
  );
};

export default AboutMovie;