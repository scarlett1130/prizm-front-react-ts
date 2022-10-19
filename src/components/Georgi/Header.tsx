import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss";
import { Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../store";
import setAuthToken from "../../utils/setAuthToken";
import { logoutUser } from "../../store/user/actions";
import { Dispatch } from "redux";

const friendOptions = [
  {
    key: 'Avalanche',
    text: 'Avalanche',
    value: 'Avalanche',
    image: { avatar: true, src: '/images/avalanche.svg' },
  },
  {
    key: 'Ethereum',
    text: 'Ethereum',
    value: 'Ethereum',
    image: { avatar: true, src: '/images/ethereum.svg' },
  },
  {
    key: 'Polygon',
    text: 'Polygon',
    value: 'Polygon',
    image: { avatar: true, src: '/images/polygon.svg' },
  },
  {
    key: 'Fantom',
    text: 'Fantom',
    value: 'Fantom',
    image: { avatar: true, src: '/images/fantom.svg' },
  },
]

const Header = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const user = useSelector(
    (state: AppState) => state.userModule,
    shallowEqual
  );

  useEffect(() => {
    if (user.isAuthenticated === false) {
      if (window.location.pathname.indexOf('signup') === -1)
        navigate('/signin');
    }
    //Runs only on the first render
  }, []);

  const sign = () => {
    if (user.isAuthenticated === true) {
      dispatch(logoutUser());
      // setAuthToken(false);
      // sessionStorage.removeItem('token');
    }
    navigate('/signin');
  }
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link to="/third">
          <div className={styles.logo}>
            <img src="/images/logo.svg" />
            <h1>PRISM</h1>
          </div>
        </Link>

        <div className={styles.tab}>
          <ul>
            <Link to="/second">
              <li>Strategies</li>
            </Link>
            <Link to="/first">
              <li>Explore</li>
            </Link>
            <Link to="/signin"><li>Build</li></Link>
            <li>Leaderboard</li>
          </ul>
        </div>
      </div>

      <div className={styles.other}>
        <div className={styles.dropdown}>
          {/* <img width="18px" height="18px" src="/images/avalanche.svg"/>Avalanche
           */}
          <Dropdown
            className={styles.drop}
            fluid
            selection
            options={friendOptions}
            defaultValue={friendOptions[0].value}
          />
          <img className={styles.arrow} src="/images/dropdown.svg" alt="dropdown" />
        </div>
        <div className={styles.wallet}><img src="/images/walletconnect.svg" alt="walletconnect" />Connect Wallet</div>
        <div className={styles.signin} onClick={(e) => sign()}>{user.isAuthenticated === true ? 'SignOut' : 'SignIn'}</div>
      </div>
    </div>
  );
};

export default Header;
