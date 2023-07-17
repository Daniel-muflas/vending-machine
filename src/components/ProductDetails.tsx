import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card, Grid } from '@mui/material';
import { api, ProductAPI } from '../api/api';
import { Product } from './Product';



export const  ProductDetails: React.FC = () => {
  const [productDetails, setProducts] = useState<null | ProductAPI[]>(null);
  const [totalValue, setTotalValue] = useState<number>(0.0);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);

  function decrementStock(id: string) {
    if (productDetails) {
      setProducts(productDetails.map(product => {
        if (product.id === id) {
          if (product.stock === 0) {
            return product;
          }
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      }));
    }
  }
  function incrementValue(value: number) {
      setTotalValue(totalValue+value);
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
                title={product.title}
                stock={product.stock}
                price={product.price}
                decrementStock={decrementStock}
                incrementValue={incrementValue}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Box sx={{ marginBottom: '16px' }}>Total value: {totalValue}€</Box>
    </Card>
    
  );
}
