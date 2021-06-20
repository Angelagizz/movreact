import React from 'react';
import styles from '../../assets/styles/cast.module.css'

const Cast = () => {
    return (
        <div className={styles.contents}>
            <div className={styles.content__characters1}>
                <div className={styles.contents_1}>
                    <img
                        className={styles.foto_cast} 
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgQM_Yxck1R7ECSXhxUGXAdD6tIF8OWz8avAWrXuB6G8X2kiu3" 
                        alt="foto"
                        width="200"
                        height="270" />
                    <h4 className={styles.nama_cast}>Vin Diesel</h4>
                </div>
                <div className={styles.contents_2}>
                    <img 
                        className={styles.foto_cast}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLcEl0lEH335dB6ofkzUWphpMCaaaETttNdii7F8fMEqcvsM2" 
                        alt="foto"
                        width="200"
                        height="270" />
                    <h4 className={styles.nama_cast}>Dwayne Johnson</h4>
                </div>
                <div className={styles.contents_3}>
                    <img 
                        className={styles.foto_cast}
                        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRW2mXA1SWbFtGh_mVvriHy3GPvoQaJ0Smr88GhwVc6Ud0Z2ezBlAGm375oclqA" 
                        alt="foto"
                        width="200"
                        height="270" />
                    <h4 className={styles.nama_cast}>Michelle Rodriguez</h4>
                </div>
            </div>

            <div className={styles.content__character2}>
                <div className={styles.contents_4}>
                    <img 
                        className={styles.foto_cast}
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU8wUS1Pq887bDxMQGE5FdnnP2G2is__TGX1ZLAJUy3mkIez9b" 
                        alt="foto"
                        width="200"
                        height="270" />
                    <h4 className={styles.nama_cast}>Jason Statham</h4>
                </div>
                <div className={styles.contents_5}>
                    <img 
                        className={styles.foto_cast}
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRiaasD9mFZZHBBp1NBq0iTmBKNr3KkKInv59rKDr8LOtOfZ5d" 
                        alt="foto"
                        width="200"
                        height="270" />
                    <h4 className={styles.nama_cast}>Paul Walker</h4>
                </div>
                <div className={styles.contents_6}>
                    <img 
                        className={styles.foto_cast}
                        src="https://upload.wikimedia.org/wikipedia/commons/4/47/Charlize_Theron_by_Gage_Skidmore.jpg" 
                        alt="foto"
                        width="200"
                        height="270" />
                    <h4 className={styles.nama_cast}>Charlize Theron</h4>
                </div>
            </div>
        </div>
    )
}

export default Cast;