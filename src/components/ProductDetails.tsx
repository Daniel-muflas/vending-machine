import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card, Grid } from '@mui/material';
import { api } from '../api/api';
import { Product } from './Product';
import { iSlot } from '../api/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../hooks';
import { setTotalValue } from '../store';


export const  ProductDetails: React.FC = () => {
  const totalValue = useSelector((state: RootState) => state.totalValue)
  const dispatch = useDispatch()
  
  const [productDetails, setProducts] = useState<null | iSlot[]>(null);
  //const [totalValue, setTotalValue] = useState<number>(0.0);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);

  function decrementStock(id: string) {
    if (productDetails) {
      setProducts(productDetails.map(product => {
        if (product.id === id) {
          if (product.quantity === 0) {
            return product;
          }
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      }));
    }
  }
  function incrementValue(value: number) {
      // TODO: review how send to the BE, to store what user buy
      console.log(value+totalValue.value)
      dispatch(setTotalValue({value:totalValue.value+value}))     
      //setTotalValue(totalValue+value);
  }


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.getProducts();
        setProducts(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Card sx={{ maxWidth: 500, marginTop: "100px", marginLeft: "50px"}}>
      <Grid container sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" gutterBottom>
          <b>Products</b>
        </Typography>
        <Grid item container spacing={2}>
          {productDetails?.map((product, index) => (
            <Grid key={index} item xs={4}>
              <Product
                key={index}
                id={product.id}
                title={product.product.name}
                stock={product.quantity}
                price={product.product.price}
                decrementStock={decrementStock}
                incrementValue={incrementValue}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Box sx={{ marginBottom: '16px' }}>Total value: {totalValue.value}€</Box>
    </Card>
    
  );
};