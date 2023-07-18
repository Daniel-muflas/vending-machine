
import { FormGroup, TextField, Button } from '@mui/material';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import api  from '../api/api';
import { useNavigate } from 'react-router-dom';
import { iRegister, iRegisterResponse } from '../api/interfaces';

  
export const Register: FC = () => {
    const navigate = useNavigate();

    const { handleSubmit, register } = useForm();

    const _onSubmit: SubmitHandler<any> = async (data) => {
      const payload: iRegister = {
        username: data.userName,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password
      };
      const register: iRegisterResponse = await api.register(payload)
      // TODO: check errors
      return navigate('/')
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
            label="First name"
            variant="outlined"
            required
            inputProps={{ ...register("firstName", { required: "true" }) }}
            margin="dense"
          />
           <TextField
            label="Last name"
            variant="outlined"
            required
            inputProps={{ ...register("lastName", { required: "true" }) }}
            margin="dense"
          />
           <TextField
            label="Email"
            variant="outlined"
            required
            inputProps={{ ...register("email", { required: "true" }) }}
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
