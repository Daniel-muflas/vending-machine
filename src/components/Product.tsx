import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

 
export interface ProductProps {
  id: string;
  title: string;
  stock: number;
  price: number;
  decrementStock: (id: string) => void;
  incrementValue: (value: number) => void;
}
 

export const Product: React.FC<ProductProps> = ({ id, title, stock, price, decrementStock, incrementValue}: ProductProps, ) => {  
  return (
		<Box>
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
      }}>
        <Box sx={{fontSize: 21, fontWeight: 800, marginBottom: '8px'}}>{title}</Box>
        <Box sx={{fontSize: 15, fontWeight: 800, marginBottom: '8px'}}>Stock : {stock}</Box>
        <Box sx={{ marginBottom: '16px' }}>Price: {price}€</Box>
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
      onClick={() => {decrementStock(id); incrementValue(price)}}>Buy</Button>
    </Box>
	)
};

