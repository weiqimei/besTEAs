import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import { useHistory } from 'react-router-dom';



const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const err = [];

    if (!first_name) err.push('First name is required');
    if (!last_name) err.push('Last name is required');
    if (first_name.length >= 25) err.push('First name must be less than 25 characters');
    if (last_name.length >= 25) err.push('Last name must be less than 25 characters');
    if (!username) err.push('Username is required');
    if (username.length >= 40) err.push('Username must be less than 40 characters');
    if (email.length <= 5 || !email.includes('@') || !email.includes('.')) err.push('You must enter a valid email');
    if (password.length <= 6) err.push('Password must be at least 5 characters');
    if (!repeatPassword) err.push('You must confirm your password');
    if (password != repeatPassword) err.push('Passwords do not match');

    setErrors(err);

  }, [first_name, last_name, username, email, password, repeatPassword]);



  const onSignUp = async (e) => {

    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name, username, email, password));
      if (data) {
        setErrors(data)
      }
      history.push('/bobaShops');
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const updateLastName = (e) => {
    setLastName(e.target.value);
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-div'>
      <form onSubmit={onSignUp}>
        <h1 className='log-in-to-beateas'>Sign Up for besTEAs</h1>
        <div className='new-to-besteas-signup'>
          <h3>Connect with great local businesses</h3>
        </div>
        <p className='terms-of-service'>
          By continuing, you agree to besTEAs’ Terms of Service
          and acknowledge besTEAs’ Privacy Policy.
        </p>
        <div className='demo-button-div'>
          <button className='demo-user-button'>Continue as Demo User</button>
        </div>
        <div className='or'>
          ---------------------------------------------------- OR ----------------------------------------------------
        </div>

        <div>
          {errors.map((error, ind) => (
            <div className='errors' key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <input className='input-field'
            type="text"
            placeholder="First Name"
            name="first_name"
            value={first_name}
            onChange={updateFirstName} />
        </div>
        <br />
        <div>
          <input className='input-field'
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={last_name}
            onChange={updateLastName} />
        </div>
        <br />
        <div>
          <input className='input-field'
            type='text'
            placeholder="Username"
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <br />
        <div>
          <input className='input-field'
            type='text'
            placeholder="Email"
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <br />
        <div>
          <input className='input-field'
            type='password'
            placeholder='Password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <br />
        <div>
          <input className='input-field'
            type='password'
            placeholder='Confirm Password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <br />
        <button className='submit-button' type='submit' disabled={!!errors.length}>Sign Up</button>
        <div className='new-to-besteas-signup'>
          <h5>Already on besTEAs?</h5>
          <NavLink to='/login'>
            <h5 className='sign-up-text'>Log in</h5>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
