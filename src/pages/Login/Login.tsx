import React, { useState } from 'react';
import styles from "./Login.module.scss";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { login } from '../../store/user/actions';
import { AppState } from "../../store";
import Header from '../../components/Georgi/Header';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Icon, Modal } from 'semantic-ui-react'
// import { TodoState } from '../../store/todo/action-types';
import { Dispatch } from "redux";
import apiCall from '../../services/apiCall';
import setAuthToken from "../../utils/setAuthToken";

interface LoginProps {
  // login: Function;
}




const LoginPage: React.FC<LoginProps> = props => {
  // const Login = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const userInfo = useSelector(
    (state: AppState) => state.userModule.userInfo,
    shallowEqual
  );

  const Login = (email: string, password: string) => {
    const data: { email: string, password: string } = { email, password };
    apiCall.post("/users/login", data).then(data => {
      console.log(data);
      const { token } = data.data;
      setAuthToken(token);
      dispatch(login(token))
      navigate('/first');
    }).catch(e => {
      const { errors } = e?.response?.data;
      alert(errors);
      console.log(e);
    });
    // dispatch(login(name!, password!));
    // login(data);
  }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div>
      <Header />
      <div className={styles.login}>
        <div className={styles.header}>
          <p>SignIn</p>
        </div>
        <div className={styles.body}>
          <div>
            <p>E-mail</p>
            <Input
              label={{ icon: 'asterisk' }}
              labelPosition='left corner'
              placeholder='E-mail'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p>Password</p>
            <Input
              label={{ icon: 'asterisk' }}
              labelPosition='left corner'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={(e) => Login(email!, password!)}>O.K.</button>
          <button onClick={(e) => navigate("/signup")}>SignUp</button>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
