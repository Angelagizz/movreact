import React, {useState, useEffect} from 'react';
import styles from '../../assets/styles/banner.module.css';
import {getAbout} from '../../services/movieBanner';
import { FaStar } from "react-icons/fa";

const Banner = () => {

  const url = "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/title/1"
    const [details,setDetails] = useState([])

    const getDataMovie = async () => {
        const response = await fetch(url)
        const details = await response.json()
        setDetails(details)
      } 

    useEffect(() => {
        getAbout()
        .then((response) => {setDetails(response.data.movie)})
        .catch((error) => {console.log(error)})
    }, [])
    console.log(details)
  
    return (
      <div className={styles.banner}>
        {[details].map((item) => (
        <div key="{item.id}">
        <div className={styles.banner__shadow}>
          <div className={styles.banner__shadow__content}>
            <h1>{item.title}</h1>
            <div className={styles.banner__rating}>
              <p>
                <FaStar 
                size={20}
                color="#FFBA5A"
                />
                9,33333336
              </p>
            </div>
            <p>2200 review</p>
            <p>{item.synopsis}</p>
            <button className={styles.banner__content__trailer}>
              Watch Trailer
            </button>
            <button className={styles.banner__content__watchlist}>
              Add to Watchlist
            </button>
          </div>
          </div>
        <div className={styles.banner__img}>
          <img src={item.poster} alt="logo" width="1600" height="455"/>
        </div>
        </div>)
        )}
      </div>
      
    );
  };
  
  export default Banner;