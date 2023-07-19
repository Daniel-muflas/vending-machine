import React from 'react';
import { Register } from '../components/Register';
import { useAuth } from '../hooks/useAuth';

export function RegisterPage() {
  useAuth(true)
  return <Register />
}