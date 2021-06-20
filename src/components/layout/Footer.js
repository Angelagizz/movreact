import React from "react";
import styles from '../../assets/styles/footer.module.css'
import logoMov from '../../assets/pictures/logo/logo2.png'

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.footer}>
        <div className={styles.footer__brand}>
          <div className={styles.footer__brand__logo}>
            <img 
                src={logoMov} 
                alt="logo" 
                width="60" 
                height="65"></img>
            <h4>MovReact</h4>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div className={styles.footer__link}>
          <li>
            <ul>
              <p>About us</p>
              <p>Blog</p>
              <p>Services</p>
              <p>Career</p>
              <p>Media Center</p>
            </ul>
          </li>
        </div>
        <div className={styles.footer__media}>
          <h5>Download</h5>
          <img
            className={styles.footer__media__store}
            src='https://pulogebang.jaketbus.id/public/img/google.png'
            alt="Play Store"
          ></img>
          <img
            className={styles.footer__media__store}
            src='https://id.blueskynetwork.com/wp-content/uploads/2017/01/app-store.png'
            alt="Apple Store"
          ></img>
          
          <div className={styles.socialmedia}>
            <h5>Social Media</h5>
            <img
              className={styles.footer__socialmedia}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png'
              alt="Facebook"
              width="40"
              height="40"
            ></img>
            <img
              className={styles.footer__socialmedia}
              src='https://kingstone.sabda.org/img/sosmed/pinterest.jpg'
              alt="Pinterest"
              width="40"
              height="40"
            ></img>
            <img
              className={styles.footer__socialmedia}
              src='https://i.pinimg.com/736x/bc/0d/db/bc0ddbe35e8e9bad28849981ce493e7d.jpg'
              alt="Instagram"
              width="40"
              height="40"
            ></img>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2000-202 MovReact. All Rights Reserved</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;