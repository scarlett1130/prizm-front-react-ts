import React, { useState } from 'react';
import styles from "./Fourth.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../../store";
// import Header from '../../components/Georgi/Header';
import Item from '../../components/Georgi/Item';
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
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<Button>Basic Modal</Button>}
      >
        <Header icon>
          <Icon name='archive' />
          Archive Old Messages
        </Header>
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => setOpen(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={() => setOpen(false)}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Main;
