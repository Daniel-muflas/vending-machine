import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { productDataMock, userMock, userWallet } from './mocks';
import { iLogOut, iLogin, iOrder, iWallet, iWalletRequest } from './interfaces';

const MOCK = true;


const BackendURLS = {
  login: `${process.env.REACT_APP_BACKEND_URL}/login`,
  logout: `${process.env.REACT_APP_BACKEND_URL}/logout`,
  slots: `${process.env.REACT_APP_BACKEND_URL}/slots`,
  wallet: `${process.env.REACT_APP_BACKEND_URL}/wallet`,
  order: `${process.env.REACT_APP_BACKEND_URL}/order`,
}


  
// const productDetailsPath = "/products"
// const userLoginPath = "/login"

function createQueryString(params: Record<string, string | number>): string {
  const searchParams = new URLSearchParams();
  
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const value = params[key];
      searchParams.append(key, String(value));
    }
  }
  
  return searchParams.toString();
}


export const api = {
  login: async (data: iLogin) => {
    return Promise.resolve(userMock)// ? MOCK : axios.post(BackendURLS.login, data)
  },
  logout: async (data: iLogOut) => {
    return Promise.resolve("") // ? MOCK : axios.post(BackendURLS.logout, data)
  },
  
  postOrder: async (data: iOrder[]) => {
    return Promise.resolve("") // ? MOCK : axios.post(BackendURLS.order, data)
  },

	getProducts: async () => {
    return Promise.resolve(productDataMock) // ? MOCK : axios.get(BackendURLS.slots)
  },
  
  getWallet: async () => {
    return Promise.resolve(userWallet) // ? MOCK: axios.get(BackendURLS.wallet)
  },
  postWallet: async (data: iWalletRequest) => {
    return Promise.resolve("") // ? MOCK : axios.post(BackendURLS.wallet, data)
  },
  
  getUser: async (params: any) => { // deprecated
    return Promise.resolve(userMock) // ? MOCK: axios.get(BackendURLS.login) + `?${createQueryString(params)}`
  }, 
}

