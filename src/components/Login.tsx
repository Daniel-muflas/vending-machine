
import { FormGroup, TextField, Button } from '@mui/material';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from '../store';
import { RootState } from '../hooks';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { iLogin, iLoginResponse } from '../api/interfaces';

  
export const Login: FC = () => {
    const userLogin = useSelector((state: RootState) => state.userLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { handleSubmit, register } = useForm();
    // COMO MANTENER LA SESSION INICIDA ?

    const _onSubmit: SubmitHandler<any> = async (data) => {
      // If get session id 

      const validUser = await api.login({
        userName: data.userName, password: data.password
      } as iLogin);
      if (validUser.name && validUser.lastName) {
        dispatch(setUserState(validUser))  
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
