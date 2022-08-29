import React from "react";
import { Link } from 'react-router-dom'
import styles from "./Item1.module.scss";
import Item from "./Item";
import Modal from "./Modal";

const Item1 = () => {
  return (
    <div className={styles.item}>
      <Item />
      <Modal />
      {/* <button className={styles.btn}>View More</button> */}
    </div>
  );
};

export default Item1;
