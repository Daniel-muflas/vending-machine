import React from 'react';
import { Login } from '../components/Login';
import { useAuth } from '../hooks/useAuth';

export function LoginPage() {
  useAuth(true)
  return <Login />
}