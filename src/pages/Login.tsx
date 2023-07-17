import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Login } from '../components/Login';
import { RootState } from '../hooks';

export function LoginPage() {
  const userLogin = useSelector((state: RootState) => state.userLogin)
  if (userLogin.name && userLogin.lastName) {
    return <Navigate to='/vending-machine' />
  }

  return <Login />
}