import React, { FC } from 'react';
import { Wallet, WalletProps } from '../components/Wallet';


export const WalletPage: FC = () => {
    const userBalance = {
        name: "test",
        lastName: "user",
        totalValue: 0.0
    } as WalletProps 
    return <Wallet {...userBalance} />
}