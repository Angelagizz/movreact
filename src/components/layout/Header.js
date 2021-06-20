import React, {useState} from 'react';
import styles from '../../assets/styles/header.module.css'
import logoMov from '../../assets/pictures/logo/logo2.png'
import ModalLogin from "react-modal";
import ModalRegister from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from 'jwt-decode';
import { addLogin } from "../../reduxStore/actions/addLogin";

import { useHistory } from "react-router-dom";

import { register, login } from "../../services/userService";    
//import ProfileMenu from './ProfileMenu';
//import Login from './Login';

const Header = () => {

  const [email, setEmail] = useState("");
  const [emailRg, setEmailRg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRg, setPasswordRg] = useState("");
  const [fullnameRg, setFulnameRg] = useState("");
  const [usernameRg, setUsernameRg] = useState("");
  // const allUser = useSelector(state => state.user.alluser.list);
  const [loginmod, setLoginmod] = useState(false);
  const [regmod, setRegmod] = useState(true);
  const {fullName, token} = useSelector(state => state.login);

  const dispatch = useDispatch();
  const history = useHistory();

  const handlerRegister = (e) => {
    e.preventDefault();
    const store = window.localStorage;
    register(fullnameRg, usernameRg, emailRg, passwordRg)
      .then(response => {
        console.log(response);
    
      })
      .catch(error => {
        console.log(error);
      });
  };

    console.log(setEmail)
  const handleSubmit = (e) => {
    e.preventDefault();
    const store = window.localStorage;
    login(email, password)
      .then(response => {
        const { email, token } = response.data;
        // console.log(response.data);
        console.log(response);

        store.setItem("token", response.data.token);
        const decode = jwt_decode(token);
        console.log(decode);
        dispatch(addLogin(email, decode.fullName, token));

      })
      .catch(error => {
        console.log(error);
      });
      setRegmod(false)
    // dispatch(addLogin(username, password));
  };

  
    return (
      <div className={styles.header}>
        <div className={styles.header__brand}>
          <div className={styles.header__container}>
            <img src={logoMov} alt="logo" width="60" height="65" />
            <h4>MovReact</h4>
          </div>
        </div>
        <div className={styles.header__search}>
          <input
            className={styles.header__search__input}
            type="text"
            placeholder="Search Movie"
          ></input>
        </div>
        
        {token === "" ? (<div className={styles.user__btn}>


<div className={styles.loginButton} onClick={(e) => console.log(e.target)}>
  <p onClick={(e) => setRegmod(true)}>SignUp</p> 

<div className={styles.ReactModal__Overlay}>
<>
<ModalRegister
  style={{
    content :{
    overflow: 'auto',
    top: '100px',
    left: '500px',
    right: '500px',
    bottom: '150px',
    borderColor: 'black',
    height: '530px',
      }
    }}
  isOpen={regmod}
  onRequestClose={(e) => {
    
    setRegmod(false);
  }}
>
<div className={styles.section}>
  <div className={styles.container}>
    <button className={styles.btnClose} onClick={() => setRegmod(false)}>
      X
    </button>
    <form className={styles.form}>
      <h3>MovReact</h3>

      <h6>Fullname</h6>
      <input
        type="fullname"
        onChange={(e) => setFulnameRg(e.target.value)}
        placeholder="Full Name"
        value={fullnameRg}
        // name="name"
      ></input>

      <h6>Username</h6>
      <input
        type="username"
        onChange={(e) => setUsernameRg(e.target.value)}
        placeholder="User Name"
        value={usernameRg}
        // name="name"
      ></input>

      <h6>Email</h6>
      <input
        type="email"
        // name="email"
        value={emailRg}
        placeholder="Your email here"
        onChange={(e) => setEmailRg(e.target.value)}
      ></input>

      <h6>Password</h6>
      <input
        type="password"
        // name="password"
        value={passwordRg}
        placeholder="Password"
        onChange={(e) => setPasswordRg(e.target.value)}
      ></input>

      <button
        className={styles.btn_signupfa}
        onClick={(e) => handlerRegister(e)}
      >
        Sign Up
      </button>

      <p>
        Already have an account?
        <button
          className={styles.btn_signinfa}
          onClick={() => {
            setLoginmod(true);
            setRegmod(false);
          }}
        >
          Log In
        </button>
      </p>
      {/*  */}
    </form>
  </div>
</div>
</ModalRegister>
</>
<>
<ModalLogin
style={{
  content :{
  overflow: 'auto',
  top: '100px',
  left: '500px',
  right: '500px',
  bottom: '150px',
  borderColor: 'black',
    }
  }}
isOpen={loginmod}
onRequestClose={(e) => {
  
  setLoginmod(false);
}}
>
<div className={styles.section}>
    <button className="btnClose" onClick={() => setLoginmod(false)}>
      X
    </button>
  <div className={styles.container}>
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <h3>MovReact</h3>
      <h6>Email</h6>
      <input
        type="username"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username"
        value={email}
        // name="name"
      ></input>

      <h6>Password</h6>
      <input
        type="password"
        // name="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button className={styles.btn_signinfb} onClick={(e) => {
          setRegmod(true);
          setLoginmod(false)
          handleSubmit(e);
      }}>Log in</button>
    </form>
  </div>
</div>
</ModalLogin>
</>
</div>
</div>
</div>) : (<p className={styles.fullName}>{fullName}</p>) }

        
  </div>  

    );
};
  
  export default Header;
