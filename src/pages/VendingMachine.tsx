import React from 'react';
import { Login } from '../components/Login';
import { VendingMachine } from "../components/VendingMachine";


export function VendingMachinePage() {  
  const token = localStorage.getItem('token');
  if (!token) {
    return <Login />
  }

  return <VendingMachine />
}

