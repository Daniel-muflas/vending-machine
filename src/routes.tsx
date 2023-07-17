import React from 'react';

import { NotFoundPage } from './pages/NotFound';
import { LoginPage } from './pages/Login';
import { VendingMachinePage } from './pages/VendingMachine';
import App from './App';


export const routes = [
    {
      path: "/app",
      element: <App />
    },
    {
      path: "/",
      element: <LoginPage />,
    },
    /**
    {
      path: "/products",
      element: <ProductsPage />,
    },
    
    {
      path: "/wallet",
      element: <WalletPage />,
    },
    */
    {
      path: "/vending-machine",
      element: <VendingMachinePage />,
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ]