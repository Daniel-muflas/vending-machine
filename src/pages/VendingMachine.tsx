import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from '../components/Login';
import { VendingMachine } from "../components/VendingMachine";
import { RootState } from '../hooks';


export function VendingMachinePage() {  
  const sessionId = useSelector((state: RootState) => state.userLogin)
  if (!sessionId.sessionId) {
    return <Login />
  }

  return <VendingMachine />
}

