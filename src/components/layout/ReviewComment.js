import React, {useState, useEffect}  from "react";
import {getReview} from '../../services/reviewService';
import { FaStar } from "react-icons/fa";
import styles from '../../assets/styles/reviewcomment.module.css'

const ReviewComment = () => {
    const colors = {
        orange: "#FFBA5A",
        
    };

    const url = "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/allreviews"
    const [reviews,setReviews] = useState([])

    const getDataReview = async () => {
        const response = await fetch(url)
        const reviews = await response.json()
        setReviews(reviews)
      } 

    useEffect(() => {
        getReview()
        .then((response) => {setReviews(response.data.reviews)})
        .catch((error) => {console.log(error)})
    }, [])
    console.log(reviews)
    return (
        <div className={styles.container}>
            {reviews.map((item) => (
            <div key={item.id}>
                <div className={styles.container__profile}>
                    <img src="https://images.pexels.com/photos/301535/pexels-photo-301535.jpeg" width="60" height="60"/>
                    <h4>{item.User.fullName}</h4>
                </div>
                <div className={styles.text_review}>
                    <p>{item.review}</p>
                    <div className={styles.star__rating}>
                        <FaStar
                            size={20}
                            color={colors.orange}
                        />
                        <p>{item.rating}/10</p>
                    </div>
                </div>
                </div>)
                
            )}
            <div className="comment__loadmore">
                <button>More Review</button>
            </div>
        </div>

    )
}

export default ReviewComment;

  