import React, { useState } from 'react';
import style from "./Item1.module.scss";
import styles from "./Modal.module.scss";
// import Header from '../../components/Georgi/Header';
import ModalItem from '../../components/Georgi/ModalItem';
import NetItem from '../../components/Georgi/NetItem';
import MiniItem from '../../components/Georgi/MiniItem';
// import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Main = () => {
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {/* <Header/> */}
      <Modal
        closeIcon
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='fullscreen'
        trigger={<button className={style.btn}>View More</button>}
      >
        {/* <Header icon>
        <Icon name='archive' />
        Archive Old Messages
      </Header> */}
        <Modal.Content>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.ModalItem}>
                <ModalItem />
                <div className={styles.RunBtn}><button>Run</button></div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p><u>Performance</u></p>
                  <p>Created 4th July 2022</p>
                  <p><u>Total Profit</u></p>
                  <p>$32,371.45</p>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.item_data}>
                    <NetItem name="ETH" path='ETH' />
                    <div className={styles.line}></div>
                    <NetItem name="CURVE" path='CURVE' />
                    <div className={styles.line}></div>
                    <NetItem name="STAKE" path='STAKE' />
                  </div>
                  <button>Modify</button>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <p>You might also like</p>
              <div className={styles.miniItem}>
                <MiniItem />
                <MiniItem />
                <MiniItem />
                <MiniItem />
              </div>
            </div>
          </div>
        </Modal.Content>
        {/* <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions> */}
      </Modal>
    </div>
  );
};

export default Main;
