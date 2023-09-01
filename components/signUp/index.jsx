import React, { useEffect, useState } from 'react';
import SignUpImg from '/src/images/signUp.svg';

import Login from './login';
import NewUser from './newUser';

import { redirect, useNavigate } from 'react-router-dom';
import { LOGIN, SIGNUP } from '../../apis/urls';
import { useUserContext } from '../../context/userContext';
import { fakeAPI } from '../../apis/fakeAPI';

export const SignUpAction = async ({ request }) => {
  const formData = await request.formData();
  let intent = formData.get('intent');

  window?.localStorage.getItem('access_token')
    ? window.localStorage.removeItem('access_token')
    : null;

  if (intent === 'login') {
    const { userEmail, loginPassword } = Object.fromEntries(formData);

    const loginData = {
      email: userEmail,
      password: loginPassword,
    };
    await fetch(LOGIN, {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(async (response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          let errorData;
          try {
            errorData = await response.json();
            console.log('Error Data received', errorData, errorData.message);
          } catch (error) {
            errorData = { message: 'Login failed' };
          }
          alert(errorData.message || 'Login failed');
        }
      })
      .then((data) => {
        window?.localStorage.setItem('access_token', data.access_token);
        return redirect('trips');
      })
      .catch((err) => {
        console.log(err.message);
      });
  } else if (intent == 'signup') {
    const { username, userEmailSignUp, signUpPassword } =
      Object.fromEntries(formData);
    const signupData = {
      name: username,
      email: userEmailSignUp,
      password: signUpPassword,
    };

    await fetch(SIGNUP, {
      method: 'POST',
      body: JSON.stringify(signupData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(async (response) => {
        console.log(response.status);
        if (response.status >= 200 && response.status <= 299) {
          console.log('jsoN', response.json());
          return response.json();
        } else {
          let errorData;
          try {
            errorData = await response.json();
            console.log('Error Data', errorData);
          } catch (error) {
            // Parsing JSON failed, use a generic error message
            errorData = { message: 'Login failed' };
          }
          alert(errorData.message || 'Login failed');
        }
      })
      .then((data) => {
        window?.localStorage.setItem('access_token', data.access_token);
        return redirect('trips');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return window?.localStorage.getItem('access_token')
    ? redirect('trips')
    : (alert('Try logging in again.'), null);
};

const SignUp = () => {
  const [userStage, setUserStage] = useState('login'); //login or signup
  const { token } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    fakeAPI();
    token != undefined ? navigate('/trips') : null;
  }, []);

  const updateUserStage = (stage) => {
    setUserStage(stage);
  };

  const renderForm = () => {
    return userStage === 'login' ? (
      <Login updateUserStage={updateUserStage} />
    ) : (
      <NewUser updateUserStage={updateUserStage} />
    );
  };

  return (
    <main className="divStyle min-h-screen max-w-[400px] mx-auto border-none">
      <div className="w-full min-h-[250px]">
        <img src={SignUpImg} alt="Sign Up Image" width={400} />
      </div>
      {renderForm()}
    </main>
  );
};

export default SignUp;
