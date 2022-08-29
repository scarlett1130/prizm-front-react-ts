import React from "react";
import styles from "./Item.module.scss";

const Item = () => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <img src="/images/ethereum.svg" /><img src="/images/plus.svg" /><img src="/images/interaction.svg" />
      </div>
      <div className={styles.body}>
        <div>
          <div className={styles.star_txt}>
            <div className={styles.left}>xxxxxx</div>
            <div className={styles.star}><img src="/images/star.svg" />x.x</div>
          </div>
          <div>xxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <hr />
          <div className={styles.star_txt}>
            <div>xxxxxxxxxxxxx</div>
            <div className={styles.star}>Modify<img src="/images/modify.svg" /></div>
          </div>
          <div>xxxxxxxx</div>
          <div>xxxxx</div>
          <div>xxxxxxxxxxxxxxx</div>
        </div>

        <div className={styles.btn}>
          <button>Pause</button>
          <button>Stop</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
