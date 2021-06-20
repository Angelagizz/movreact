import React, {useState} from "react";
import styles from "../../assets/styles/profilemenu.module.css";

const ProfileMenu = () => {
    return(
        <div className={styles.container}>
        <div>
          <a href="profile" className={styles.a_parent}>
              <div className={styles.wrapper}>
                <img src="https://asset.kompas.com/crops/sn--2PkUfeAmtszsB-wnqXmwBkM=/0x0:5184x3456/750x500/data/photo/2020/12/11/5fd303549b2c9.jpg" width="40" height="40" alt="foto_profile"/>
              </div>
          </a>
        </div>
        <div className={styles.dd_menu}>
          <ul>
            <li>
              <a href="menu" className={styles.dd__menu__child}>
                <span className={styles.text}>Profile</span>
              </a>
            </li>
            <li>
              <a href="menu" className={styles.dd__menu__child}>
                <span className={styles.text}>Setting</span>
              </a>
            </li>
            <li>
              <a href="menu" className={styles.dd__menu__child}>
                <span className={styles.text}>Help</span>
              </a>
            </li>
            <li>
              <a href="menu" className={styles.dd__menu__child}>
                <span className={styles.text}>Sign Out</span>
              </a>
            </li>
          </ul>
          
        </div> 
        </div>   
    )
}




export default ProfileMenu;