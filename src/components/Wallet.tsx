import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Coins } from './Coin';
import { api } from '../api/api';
import { iOrder, iWalletRequest } from '../api/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../hooks';



export interface WalletProps {
  name: string;
  lastName: string;
  totalValue: number
}

export const Wallet: React.FC<WalletProps> = ({name, lastName, totalValue}) => {  
    const coins: Array<number> = [
        0.10, 0.20, 0.50, 1, 2, 5
    ]
    const allItems = useSelector((state: RootState) => state.allItems);

    const [totalBalance, setTotalBalance] = useState<number>(0.0);
    const [total, setTotalValue] = useState<number>(totalValue);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<null | unknown>(null);

    function incrementBalance(value: number) {
      setTotalBalance(totalBalance+value);
    };

    function refoundMoney() {
      setTotalBalance(0.0);
    };

    function buy(){
      const data = allItems as iOrder[]
      api.postOrder(data)
    }

    async function saveWallet() {
      const data = {quantity: totalBalance} as iWalletRequest
      await api.postWallet(data)
    };

    useEffect(() => {
      const fetchBalance = async () => {
        try {
          setLoading(true);
          // get cookie user
          const wallet = await api.getWallet()
            setTotalBalance(totalBalance || wallet.balance);
            setTotalValue(totalValue)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBalance();
    }, [totalBalance, totalValue]);
  
    return (
    <Card sx={{ maxWidth: 500 ,marginTop: "100px", marginRight: "50px"}}>
        <Grid container sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" gutterBottom>
          <b>User name: {name} {lastName}</b>
        </Typography>
        <Grid item container spacing={2}>
          {coins?.map((coin, index) => (
            <Grid key={index} item xs={4}>
              <Coins value={coin} incrementBalance={incrementBalance}/>
            </Grid>
          ))}
        </Grid>
        <Box sx={{
            flexWrap: 'wrap',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '1px',
            boxShadow: '0 12px 6px rgba(0, 0, 0, 0.1)',
            Width: '200px',
            marginBottom: "5px",
            background:
            "linear-gradient(180deg, rgba(34,34,34, 0.75) 0%, rgba(155, 155, 155, 1.0) 0%, rgba(54, 124, 185, 1.0) 100%)"
          }} 
         > 
          <Typography color={totalBalance < totalValue ? 'error' : 'textPrimary'} variant="h6" gutterBottom>
            <b>Balance: {totalBalance}€</b>
            <Button sx={{
              flexWrap: 'wrap', 
              display: 'inline-flex',
              alignItems: 'center',
              bgcolor: 'background.paper', 
              boxShadow: 1,
              borderRadius: 2,
              Width: '200px',
              marginLeft: '15px',
              marginRight: 'auto',  
            }}
            onClick={() => {saveWallet()}}>Save money</Button>
          </Typography>
        </Box>
        <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2,
            marginLeft: 15
          }}>
            <Button sx={{
              flexWrap: 'wrap', 
              alignItems: 'center',
              bgcolor: 'background.paper', 
              boxShadow: 1,
              borderRadius: 2,
              width: '150px',
              marginRight: 2,
            }}
            onClick={() => {buy()}}
            disabled={totalBalance < totalValue} // Add the disabled attribute
            >Buy</Button>
          </Box>
          <Button sx={{
            flexWrap: 'wrap', 
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'background.paper', 
            boxShadow: 1,
            borderRadius: 2,
            Width: '200px',
            marginBottom: "5px",
            marginLeft: 'auto',
            marginRight: 'auto',  
          }}
          onClick={() => {refoundMoney()}}>Refound money</Button>
        </Grid>
    </Card> 
	  )
    // TODO: refound money -> reset to wallet balance
    // TODO: create other button to buy all and check items total and balance
};

