import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../hooks';
import { ProductDetails } from "./ProductDetails"
import { Wallet } from './Wallet';


export const VendingMachine : React.FC = () => {
	// why can share the user through components ?
	const userState = useSelector((state: RootState) => state.userLogin)
	const totalValueState = useSelector((state: RootState) => state.totalValue)
	return (
		<Card>
			<Grid container>
				<Grid item xs={8}>
					<ProductDetails />
				</Grid>
				<Grid item xs={4}>
					<Wallet {...userState} />
				</Grid>
			</Grid>
		</Card>
	);
}
