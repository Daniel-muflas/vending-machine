import { iLoginResponse, iSlot, iWallet } from "./interfaces";

export const productDataMock: iSlot[] = [
    { 
      id: "1",  quantity: 5, coordinates: [1, 1],
      product: {id: "aa", name: 'Coke',  price: 1.5},
    }, { 
      id: "2", quantity: 2, coordinates: [1, 2],
      product: {id: "aa", name: 'Coke',  price: 1.5 },
    }, { 
      id: "3", quantity: 7, coordinates: [1, 3],
      product: {id: "aa", name: 'Coke',  price: 1.5 },
    }, { 
      id: "4", quantity: 5, coordinates: [2, 1],
      product: {id: "aa", name: 'Coke',  price: 1.5 },
    }, { 
      id: "5", quantity: 1, coordinates: [2, 2],
      product: {id: "aa", name: 'Water',  price: 1 },
    }, { 
      id: "6", quantity: 8, coordinates: [2, 3],
      product: {id: "aa", name: 'Water',  price: 1},
    }, { 
      id: "7", quantity: 4, coordinates: [3, 1],
      product: {id: "aa", name: 'Red Bull',  price: 3.},
    }, { 
      id: "8", quantity: 4, coordinates: [3, 2],
      product: {id: "aa", name: 'Red Bull',  price: 3},
    }, {
      id: "9", quantity: 2, coordinates: [3, 3],
      product: {id: "aa", name: 'Red Bull',  price: 3},
    },
  ];

export const userMock: iLoginResponse = {
    name: "Homer",
    lastName: "Simpsons",
    sessionId: "noTVnoBEER"}


export const userWallet: iWallet = {balance: 10.0}