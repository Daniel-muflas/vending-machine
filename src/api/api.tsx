// import axios from 'axios';

export interface ProductAPI {
  id: string
  title: string;
  stock: number;
  price: number;
}

export interface UserLoginRequestAPI {
  name: string;
  lastName: string;
}

export interface UserLoginResponseAPI extends UserLoginRequestAPI{
  balance: number;
}
  
// const productDetailsPath = "/products"
// const userLoginPath = "/login"

const productDataMock: ProductAPI[] = [
    { id: "1", title: 'Coke', stock:5, price: 1.5 },
    { id: "2", title: 'Coke', stock:2, price: 1.5 },
    { id: "3", title: 'Coke', stock:7, price: 1.5 },
    { id: "4", title: 'Coke', stock:5, price: 1.5 },
    { id: "5", title: 'Water', stock:15, price: 1 },
    { id: "6", title: 'Water', stock:8, price: 1},
    { id: "7", title: 'Red Bull', stock:4, price: 3.},
    { id: "8", title: 'Red Bull', stock:4, price: 3},
    { id: "9", title: 'Red Bull', stock:2, price: 3},
  ];
const userMock: UserLoginResponseAPI = {name: "Daniel", lastName:"de la Fuente", balance: 100.0}

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
	getProducts: () => {
    console.log("Getting products...")
    return Promise.resolve(productDataMock)
  }, // axios.get(process.env.REACT_APP_BACKEND_URL + productDetailsPath),
  getUser: (qparams: UserLoginRequestAPI) => {
    console.log(qparams); 
    return Promise.resolve(userMock)
  }
  // axios.get(process.env.REACT_APP_BACKEND_URL + userLoginPath) + `?${createQueryString(qparams)}`
} 

