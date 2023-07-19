import React from 'react';
import { VendingMachine } from "../components/VendingMachine";
import { useAuth } from '../hooks/useAuth';


export function VendingMachinePage() {  
  useAuth(false)
  return <VendingMachine />
}

