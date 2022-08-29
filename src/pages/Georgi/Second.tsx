import React, { useState } from 'react';
import styles from "./Second.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../../store";
import Header from '../../components/Georgi/Header';
import Item from '../../components/Georgi/Item1';
import Chart from '../../components/Georgi/Chart';
import { Button } from 'semantic-ui-react';
// import {useTheme} from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';


const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div>
        <div className={styles.strategy}>
          <p>My Active Strategies</p>
          <div className={styles.data}>
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
        <div className={styles.creator}>
          <div className={styles.creatorHead}>
            <p>My Creator Earnings</p>
            <span>Total Earned - $2000</span>

          </div>
          <div className={styles.creatorBody}>
            <div className={styles.graph}>
              <Chart />
            </div>
            <div className={styles.table}>
              <p>Most Successful Strategies</p>
              <div className={styles.table_content}>
                <div>
                  <p><u>STRATEGY</u></p>
                  <p><u>EARNINGS</u></p>
                  <p><u>DATE CREATED</u></p>
                </div>
                <div>
                  <p>STRATEGY</p>
                  <p>EARNINGS</p>
                  <p>DATE CREATED</p>
                </div>
                <div>
                  <p>STRATEGY</p>
                  <p>EARNINGS</p>
                  <p>DATE CREATED</p>
                </div>
                <div>
                  <p>STRATEGY</p>
                  <p>EARNINGS</p>
                  <p>DATE CREATED</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.creatorFooter}>
            <p>Explore more strategies</p>
            <button>Explore</button>
          </div>
        </div>
        <div className={styles.referrals}>
          <p>My Referrals</p>
          <span>Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor<br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br />
            exercitation ullamco laboris nisi ut aliquip ex ea
          </span>
          <div className={styles.ref}>
            <div className={styles.ref_top}>
              <div>
                <p>My Referrals</p>
                <p>Level 1~10%</p>
              </div>
              <div>
                <button>Generate Referral+</button>
              </div>
            </div>
            <div className={styles.ref_bottom}>
              <div className={styles.ref_data}>
                <p><u>REFERRAL CODE</u></p>
                <p><u>REFERRAL EARNING</u></p>
                <p><u>TOTAL REFERRAL</u></p>
                <p><u>STRATEGIES CREATED</u></p>
                <p><u>TOTAL REBATES</u></p>
              </div>
              <div className={styles.ref_data}>
                <p>PRSM05</p>
                <p>$250.45</p>
                <p>4</p>
                <p>10</p>
                <p>$25.05</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
