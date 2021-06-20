import React, {useState, useEffect} from "react";
import styles from '../../assets/styles/overview.module.css';
import {getAbout} from '../../services/movieBanner';

const Overview = () => {
  //untuk ambil params yang di URL

  const url = "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/title/1"
    const [details,setDetails] = useState([])

    const getDataMovie = async () => {
        const response = await fetch(url)
        const details = await response.json()
        setDetails(details)
      } 

    useEffect(() => {
        getAbout()
        .then((response) => {setDetails(response.data.movie.MovieInfo)})
        .catch((error) => {console.log(error)})
    }, [])
    console.log(details)

  return (
    <div className={styles.overview}>
      {[details].map((item) => (
        <div key="{item.id}">
      <div className={styles.overview__synopsis}>
        <div className={styles.synopsis__title}>
          <p>Synopsis</p>
        </div>
        <div className={styles.synopsis__content}>
          <p>"A seventeen-year-old aristocrat falls in love with…t aboard the luxurious, ill-fated R.M.S. Titanic."</p>
        </div>
      </div>
      <div className={styles.overview__movie__info}>
        <div className={styles.movie__info__title}>
          <p>Movie Info</p>
        </div>
        <div className={styles.movie__info__content}>
            <div><span className={styles.bold}>Release Date : </span>{item.releaseDate}</div>
            <div><span className={styles.bold}>Director : </span>{item.director}</div>
            <div><span className={styles.bold}>Featured Song : </span>{item.featuredSong}</div>
            <div><span className={styles.bold}>Budget : </span>{item.budget}</div>

          
        </div>
      </div>
      </div>)
      )}
    </div>
  );
};



export default Overview;