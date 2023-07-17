import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from '../components/Login';
import { VendingMachine } from "../components/VendingMachine";
import { RootState } from '../hooks';


export function VendingMachinePage() {  
  const userLogin = useSelector((state: RootState) => state.userLogin)
  if (!userLogin.name && !userLogin.lastName) {
    return <Login />
  }

  return <VendingMachine />
}

