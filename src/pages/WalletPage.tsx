import React, { FC } from 'react';
import { Wallet, WalletProps } from '../components/Wallet';


export const WalletPage: FC = () => {
    const userBalance = {
        name: "test",
        lastName: "user test",
        balance: 0.0
    } as WalletProps 
    return <Wallet {...userBalance} />
}