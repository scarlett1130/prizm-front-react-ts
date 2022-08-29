import React from "react";
import { Link } from 'react-router-dom'
import styles from "./Header.module.scss";
import { Dropdown } from 'semantic-ui-react'

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
      </div>
    </div>
  );
};

export default Header;
