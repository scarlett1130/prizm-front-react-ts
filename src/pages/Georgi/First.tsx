import React, { useState } from 'react';
import styles from "./First.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../../store";
import Header from '../../components/Georgi/Header';
import Item from '../../components/Georgi/Item';
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className={styles.hide}>
        <div className={styles.data}>
          <div>No active strategies.<br />Explore strategies below or<br />build your own.</div>
          <div><img src='/images/arrow.svg' /></div>
          <div className={styles.btn}>
            <button onClick={() => { navigate('/second') }}>Explore</button>
            <button>Build</button>
          </div>
        </div><br />

      </div>
    </div>
  );
};

export default Main;
