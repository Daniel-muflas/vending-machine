import React from 'react';
import { Navigate } from 'react-router-dom';
import { Login } from '../components/Login';

export function LoginPage() {
  const token = localStorage.getItem('token');
  if (token) {
    return <Navigate to='/vending-machine' />
  }

  return <Login />
}