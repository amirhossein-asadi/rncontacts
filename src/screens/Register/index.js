import React, {useState, useCallback, useContext} from 'react';
import SignupComponent from '../../components/Signup';
import {GlobalContext} from '../../context/Provider';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';

const validateEmail = email => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      console.log(data, error);
      if (data) {
        navigate(LOGIN);
        clearAuthState()(authDispatch);
      }
    }, [data, error]),
  );

  const emailValidation = (key, value) => {
    if (!validateEmail(value)) {
      setErrors(prevState => {
        return {...prevState, [key]: 'This field must be an email!'};
      });
    } else {
      setErrors(prevState => {
        return {...prevState, [key]: null};
      });
    }
  };

  const passwordValidation = (key, value) => {
    if (value.trim().length < 6) {
      setErrors(prevState => {
        return {...prevState, [key]: 'This field needs min 6 character!'};
      });
    } else {
      setErrors(prevState => {
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
        setErrors(prevState => {
          return {...prevState, [key]: null};
        });
      }
    } else {
      setErrors(prevState => {
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
    if (!form.username) {
      setErrors(prevState => {
        return {...prevState, username: 'Please add a username!'};
      });
    }
    if (!form.firstName) {
      setErrors(prevState => {
        return {...prevState, firstName: 'Please add a first name!'};
      });
    }
    if (!form.lastName) {
      setErrors(prevState => {
        return {...prevState, lastName: 'Please add a last name!'};
      });
    }
    if (!form.email) {
      setErrors(prevState => {
        return {...prevState, email: 'Please add a email!'};
      });
    }
    if (!form.password) {
      setErrors(prevState => {
        return {...prevState, password: 'Please add a password!'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(err => !err)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <SignupComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default Register;
