import React from "react";
import { Link } from 'react-router-dom'
import styles from "./MiniItem.module.scss";

const MiniItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <img src="/images/ethereum.svg" /><img src="/images/plus.svg" /><img src="/images/interaction.svg" />
      </div>
      <div className={styles.body}>
        <div>
          <div className={styles.star_txt}>
            <div className={styles.left}>ETh Farming</div>
            <div className={styles.star}><img src="/images/star.svg" />x.x</div>
          </div>
          <div>7% APY</div>
          <div>350 Users deploying</div>

        </div>
      </div>
    </div>
  );
};

export default MiniItem;
