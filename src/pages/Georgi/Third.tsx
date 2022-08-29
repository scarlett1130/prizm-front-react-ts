import React, { useState } from 'react';
import styles from "./Third.module.scss";
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
      <div className={styles.index}>
        <div className={styles.banner}>
          <img src='/images/banner.svg' />
        </div>
        <div className={styles.right}>
          <p>Lorem ipsum dolor sit amet, consectetur<br />
            adipiscing elit, sed do eiusmod tempor<br />
            incididunt ut labore et dolore magna aliqua. Ut<br />
            enim ad minim veniam, quis nostrud<br />
            exercitation ullamco laboris nisi ut aliquip ex ea
          </p>
          <div className={styles.btn}>
            <button onClick={() => navigate("/first")}>Explore</button>
            <button>Build</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
