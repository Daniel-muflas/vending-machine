import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Card, Grid } from '@mui/material';
import api from '../api/api';
import { Product } from './Product';
import { iSlot } from '../api/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../hooks';
import { setTotalValue, iAllItems, iTotalValue, setAllItems, resetAllItems} from '../store';


export const  ProductDetails: React.FC = () => {
  const totalValue = useSelector((state: RootState) => state.totalValue)

  const dispatch = useDispatch()
  
  const [productDetails, setProducts] = useState<null | iSlot[]>([]);

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

  function checkStock(id: string){
    if (!productDetails) {
      return false;
    }
     return !(productDetails.some(product => product.id === id && product.quantity === 0));
  }

  async function resetValue() {
    dispatch(resetAllItems())
    dispatch(setTotalValue({value: 0.0} as iTotalValue))
    const response = await api.getProducts();
    const products = response.data
    setProducts(products);
  }

  function incrementValue(id: string, value: number) {
      if (checkStock(id)){
        dispatch(setTotalValue({value: totalValue.value+value} as iTotalValue))
      }
  }

  function addItem(id: string) {
    if (checkStock(id)) {
      dispatch(setAllItems({id, quantity: 1} as iAllItems))
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.getProducts();
        const products = response.data
        setProducts(products);
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
      <Grid container sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h6" gutterBottom>
          <b>Products</b>
          <Button sx={{
            flexWrap: 'wrap', 
            display: 'inline-flex',
            alignItems: 'center',
            bgcolor: 'background.paper', 
            boxShadow: 1,
            borderRadius: 2,
            width: '200px',
            marginLeft: '150px',
            marginRight: 'auto',  
          }}
          onClick={() => {resetValue();}}>Reset products</Button>
        </Typography>
        <Box sx={{
                flexWrap: 'wrap', 
                display: 'inline-flex',
                alignItems: "center",
                bgcolor: 'background.paper', 
                width: 'auto',
              }}>
                <Typography variant="h5" gutterBottom>
                  <b>Total value: {totalValue.value}€</b>
                </Typography>    
              </Box>
        <Grid item container spacing={2}>
          {productDetails?.map((product, index) => (
            <Grid key={index} item xs={4}>
              <Product
                key={index}
                id={product.id}
                title={product.product.name}
                stock={product.quantity}
                price={Number(product.product.price)}
                decrementStock={decrementStock}
                incrementValue={incrementValue}
                addItem={addItem}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Card>
    
  );
};