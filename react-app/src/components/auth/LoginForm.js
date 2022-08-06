import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const history = useHistory();


  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      return setErrors(data);
    }
    history.push('/bobaShops');
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
    // history.push('/bobaShops');
  };


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/bobaShops' />;
  }

  return (
    <div className='form-div'>
      <form onSubmit={onLogin} className='login-form'>
        <h1 className='log-in-to-beateas'>Log in to besTEAs</h1>
        <div className='new-to-besteas-signup'>
          <h3>New to besTEAs?</h3>
          <NavLink to='/sign-up'>
            <h4 className='sign-up-text'>Sign Up</h4>
          </NavLink>
        </div>
        <p className='terms-of-service'>
          By logging in, you agree to besTEAs’ Terms of Service
          and Privacy Policy.
        </p>
        <div className='demo-button-div'>
          <button onClick={demoLogin} className='demo-user-button'>Continue as Demo User</button>
        </div>
        <div className='or'>
          ------------------------------------------------------------- OR -------------------------------------------------------------
        </div>
        <div>
          {errors.map((error, ind) => (
            <div className='errors' key={ind}>{error}</div>
          ))}
        </div>
        <div >
          <label htmlFor='email'></label>
          <input className='input-field'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <br />
        <div >
          <label htmlFor='password'></label>
          <input className='input-field'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <br />
        <button className='submit-button' type='submit'>Login</button>
        <div className='new-to-besteas-signup-bottom'>
          <h5>New to besTEAs?</h5>
          <NavLink to='/sign-up'>
            <h5 className='sign-up-text'>Sign Up</h5>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
