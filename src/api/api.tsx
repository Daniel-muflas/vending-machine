import axios from "axios";
import { productDataMock, registerMock, userMock, userWallet } from "./mocks";
import {
  iLogOut,
  iLogin,
  iOrder,
  iRegister,
  iWalletRequest,
} from "./interfaces";

const BackendURLS = {
  login: `${process.env.REACT_APP_BACKEND_URL}/auth/login/`,
  register: `${process.env.REACT_APP_BACKEND_URL}/auth/register/`,
  logout: `${process.env.REACT_APP_BACKEND_URL}/auth/logout/`,
  slots: `${process.env.REACT_APP_BACKEND_URL}/slots/`,
  wallet: `${process.env.REACT_APP_BACKEND_URL}/wallet/`,
  order: `${process.env.REACT_APP_BACKEND_URL}/order/`,
};

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const api_url = {
  login: (data: iLogin) => {
    return axios.post(BackendURLS.login, data);
  },
  register: (data: iRegister) => {
    return axios.post(BackendURLS.register, data);
  },
  logout: (data: iLogOut) => {
    return axios.post(BackendURLS.logout, data);
  },

  postOrder: (data: iOrder[]) => { // TODO: modify interface request
    return axios.post(BackendURLS.order, {"items": data});
  },

  getProducts: () => {
    return axios.get(BackendURLS.slots);
  },

  getWallet: () => {
    return axios.get(BackendURLS.wallet);
  },
  postWallet: (data: iWalletRequest) => {
    return axios.post(BackendURLS.wallet, data);
  },
};

const urlMocked = {
  login: async (data: iLogin) => {
    return Promise.resolve(userMock);
  },
  register: async (data: iRegister) => {
    return Promise.resolve(registerMock);
  },
  logout: async (data: iLogOut) => {
    return Promise.resolve("");
  },

  postOrder: async (data: iOrder[]) => {
    return Promise.resolve("");
  },

  getProducts: async () => {
    return Promise.resolve(productDataMock);
  },

  getWallet: async () => {
    return Promise.resolve(userWallet);
  },
  postWallet: async (data: iWalletRequest) => {
    return Promise.resolve("");
  },
};

const MOCK = false;
let api: Record<string, any> = {};
if (MOCK) {
  api = urlMocked;
} else {
  api = api_url;
}
export default api;
