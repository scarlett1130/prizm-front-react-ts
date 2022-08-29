import React from "react";
import { Link } from 'react-router-dom'
import styles from "./NetItem.module.scss";
import { Dropdown } from 'semantic-ui-react'
import css from "classnames";

interface data {
  name: string;
  path: string;
}

const Item1 = ({ name, path }: data) => {
  return (
    <div className={styles.item}>
      <img src={"/images/" + path + ".svg"} />
      <p>{name}</p>
    </div>
  );
};

export default Item1;
