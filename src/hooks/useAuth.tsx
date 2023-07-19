import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';


export function useAuth (fromPublicRoutes: boolean) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect ( () => {
      if (!token ) {
        if (!fromPublicRoutes) { // not from register or login pages
            navigate('/')
        }
      } else {
        navigate("/vending-machine")
      }
    }, [fromPublicRoutes, navigate, token])

}