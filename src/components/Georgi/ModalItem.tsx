import React from "react";
import { Link } from 'react-router-dom'
import styles from "./ModalItem.module.scss";
import { Dropdown } from 'semantic-ui-react'
import css from "classnames";

const Item = () => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <p>Eth Farm</p>
        <p>ID:10</p>
        <p>Ethereum Staking</p>
        <p>Created b Vinny.xy?</p>
        <div className={styles.img}>
          <img src="/images/ethereum.svg" /><img src="/images/plus.svg" /><img src="/images/interaction.svg" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.body_top}>
          <div>
            <p><u>Info</u></p>
            <p>7% APY</p>
            <p>350Users deploying</p>
            <p>$2500 Invested</p>
            <p>Active for 25 day</p>
            <p>%500 Return</p>
            <p>Autosell at $500 profit</p>
          </div>

          <div className={styles.btn}>
            <p><u>Actions</u></p>
            <button>Swap</button>
            <div className={styles.line}></div>
            <button>Stake</button>
            <div className={styles.line}></div>
            <button>Sell</button>
          </div>
        </div>
        <div className={styles.body_bottom}>
          <button>Save</button>
          <button>Kill</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
