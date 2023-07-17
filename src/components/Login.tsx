
import { FormGroup, TextField, Button } from '@mui/material';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from '../store';
import { RootState } from '../hooks';
import { api, UserLoginRequestAPI } from '../api/api';
import { useNavigate } from 'react-router-dom';

  
export const Login: FC = () => {
    const userLogin = useSelector((state: RootState) => state.userLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { handleSubmit, register } = useForm();
    // COMO MANTENER LA SESSION INICIDA ?
    // react-session?

    const _onSubmit: SubmitHandler<any> = async (data) => {
      if (userLogin.name && userLogin.lastName){
        return navigate('/vending-machine')
      }
      
      const validUser = await api.getUser({
        name: data.name, lastName: data.lastName
      } as UserLoginRequestAPI);
      if (validUser) {
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
            inputProps={{ ...register("name", { required: "true" }) }}
            margin="dense"
          />
          <TextField
            label="User surname"
            variant="outlined"
            required
            inputProps={{ ...register("lastName", { required: "true" }) }}
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
