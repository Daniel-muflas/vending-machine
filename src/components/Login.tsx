
import { FormGroup, TextField, Button } from '@mui/material';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { iUserLoginState, setUserState } from '../store';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { iLogin, iLoginResponse } from '../api/interfaces';


export const Login: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { handleSubmit, register } = useForm();

    const _onSubmit: SubmitHandler<any> = async (data) => {
      const response = await api.login({
        username: data.userName, password: data.password
      } as iLogin);
      const login: iLoginResponse = response.data
      if (login.token) {
        dispatch(setUserState({name: login.first_name, lastName: login.last_name} as iUserLoginState))
        localStorage.setItem('token', `${login.token}`);
        return navigate('/vending-machine')
      } else {
        console.log("ERROR MESSAGE")
        return navigate('/')  
      }
    };

    return (
      <form onSubmit={handleSubmit(_onSubmit)}>
        <FormGroup sx={{ p: 3 }}>
          <TextField
            label="User name"
            variant="outlined"
            required
            inputProps={{ ...register("userName", { required: "true" }) }}
            margin="dense"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            required
            inputProps={{ ...register("password", { required: "true" }) }}
            margin="dense"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            type="submit"
          >Go to vending machine!
          </Button>
        </FormGroup>
      </form>
    );
}
