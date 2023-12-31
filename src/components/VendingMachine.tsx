import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../hooks';
import { ProductDetails } from "./ProductDetails"
import { Wallet } from './Wallet';


export const VendingMachine : React.FC = () => {
	// how can share the user through components ?
	const userState = useSelector((state: RootState) => state.userLogin)
	const totalValueState = useSelector((state: RootState) => state.totalValue)

	return (
		<Card>
			<Grid container spacing={2} justifyContent={"center"}>
				<Grid item xs={4}>
					<ProductDetails />
				</Grid>
				<Grid item xs={4}>
					<Wallet
						name={userState.name}
						lastName={userState.lastName}
						totalValue={totalValueState.value}/>
				</Grid>
			</Grid>
		</Card>
	);
}
