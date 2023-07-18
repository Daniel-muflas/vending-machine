
import { FormGroup, TextField, Button } from '@mui/material';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { iUserLoginState, setUserState } from '../store';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { iLogin, iLoginResponse } from '../api/interfaces';


export const Login: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { handleSubmit, register } = useForm();

    const _onSubmit: SubmitHandler<any> = async (data) => {
      const validUser: iLoginResponse = await api.login({
        userName: data.userName, password: data.password
      } as iLogin);
      if (validUser.token) {
        dispatch(setUserState({
          name: validUser.first_name,
          lastName: validUser.last_name,
       } as iUserLoginState))
  
        localStorage.setItem('token', `Token ${validUser.token}`);
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
