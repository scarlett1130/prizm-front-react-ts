import React, { useState } from 'react';
import styles from "./Register.module.scss";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { register } from '../../store/user/actions';
import { AppState } from "../../store";
import Header from '../../components/Georgi/Header';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Icon, Modal } from 'semantic-ui-react'
// import { TodoState } from '../../store/todo/action-types';
import { Dispatch } from "redux";
import apiCall from '../../services/apiCall';


interface Props {
  // login: Function;
}




const LoginPage: React.FC<Props> = props => {
  // const Login = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  // const userInfo = useSelector(
  //   (state: AppState) => state.userModule.userInfo,
  //   shallowEqual
  // );

  const Register = (name: string, email: string, password: string, password2: string) => {
    const data: { name: string, email: string, password: string, password2: string } = { name, email, password, password2 };
    apiCall.post("/users/register", data).then(data => {
      console.log(data);
      dispatch(register());
      navigate("/signin");
    }).catch(e => {
      const { errors } = e?.response?.data;
      alert(errors);
      console.log(e);
    });
    // dispatch(login(name!, password!));
  }




  const [name, setName] = useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  return (
    <div>
      <Header />
      <div className={styles.signup}>
        <div className={styles.header}>
          <p>SignUp</p>
        </div>
        <div className={styles.body}>
          <div>
            <p>Name</p>
            <Input
              label={{ icon: 'asterisk' }}
              labelPosition='left corner'
              placeholder='User Name'
              type='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div>
            <p>Confirm</p>
            <Input
              label={{ icon: 'asterisk' }}
              labelPosition='left corner'
              placeholder='Confirm'
              type='password'
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={(e) => Register(name, email, password, password2)}>O.K.</button>
          <button onClick={(e) => navigate("/signin")}>SignIn</button>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
