import React, { FC } from 'react';
import { Login } from './Login';
import { Box, Button } from '@mui/material';

export const Logout: FC = () => {
    // localStorage.removeItem('token');
    // localStorage.clean()
    return <Box sx={{
        display: 'inline-flex',
        alignItems: 'auto',
        justifyContent: 'auto',
        marginTop: 2,
    }}>
        <Button sx={{
        flexWrap: 'wrap', 
        alignItems: 'center',
        boxShadow: 1,
        borderRadius: 2,
        width: '150px',
        marginRight: 2,
        }}
        onClick={() => {}}	
        ><b>Logout</b></Button>
    </Box>
}
