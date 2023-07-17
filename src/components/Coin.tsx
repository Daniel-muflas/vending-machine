import React from 'react';

import { Box, Button } from "@mui/material";

 
export interface CoinsProp {
    value: number;
    incrementBalance: (value: number) => void;
}
 

export const Coins: React.FC<CoinsProp> = ({value, incrementBalance}) => {  
    return (
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
          }}>
        <Button sx={{fontSize: 21, fontWeight: 800}}
            onClick={() => {incrementBalance(value)}}
        >{value} €</Button>
        </Box>
    );
};
