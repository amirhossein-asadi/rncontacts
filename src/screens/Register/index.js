import React from 'react';
import {useState} from 'react';
import SignupComponent from '../../components/Signup';
import envs from '../../config/env';

const validateEmail = email => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Register = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const {BACKEND_URL} = envs;

  console.log(BACKEND_URL);
  console.log(__DEV__);

  const emailValidation = (key, value) => {
    if (!validateEmail(value)) {
      setError(prevState => {
        return {...prevState, [key]: 'This field must be an email!'};
      });
    } else {
      setError(prevState => {
        return {...prevState, [key]: null};
      });
    }
  };

  const passwordValidation = (key, value) => {
    if (value.trim().length < 6) {
      setError(prevState => {
        return {...prevState, [key]: 'This field needs min 6 character!'};
      });
    } else {
      setError(prevState => {
        return {...prevState, [key]: null};
      });
    }
  };

  const formValidation = (key, value) => {
    if (value.trim().length !== 0) {
      if (key === 'password') {
        passwordValidation(key, value);
      } else if (key === 'email') {
        emailValidation(key, value);
      } else {
        setError(prevState => {
          return {...prevState, [key]: null};
        });
      }
    } else {
      setError(prevState => {
        return {...prevState, [key]: 'This field is required!'};
      });
    }
  };

  const onChange = (key, value) => {
    setForm(prevState => {
      return {...prevState, [key]: value};
    });
    formValidation(key, value);
  };

  const onSubmit = () => {
    console.log(form);

    if (!form.username) {
      setError(prevState => {
        return {...prevState, username: 'Please add a username!'};
      });
    }
    if (!form.firstName) {
      setError(prevState => {
        return {...prevState, firstName: 'Please add a first name!'};
      });
    }
    if (!form.lastName) {
      setError(prevState => {
        return {...prevState, lastName: 'Please add a last name!'};
      });
    }
    if (!form.email) {
      setError(prevState => {
        return {...prevState, email: 'Please add a email!'};
      });
    }
    if (!form.password) {
      setError(prevState => {
        return {...prevState, password: 'Please add a password!'};
      });
    }
  };

  return (
    <SignupComponent
      form={form}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
