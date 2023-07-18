
///////////
/// GET ///
///////////

export interface iSlot { // GET -> response iSlot[]
    id: string;
    quantity: number;
    coordinates: [number, number]
    product: iProduct
}

export interface iProduct {
    id: string;
    name: string;
    price: number;
}

export interface iWallet {  // GET -> response iWallet
    balance: number;
}

////////////
/// POST ///
////////////
export interface iLogin { // POST 
    userName: string;
    password: string;
}

export interface iLoginResponse {
    token: string
    first_name: string;
    last_name: string;
    email: string;
}


export interface iWalletRequest { // POST -> return 200
    quantity: number;
}


export interface iOrder { // POST -> return 200
    id: string;
    quantity: number;
}

export interface iLogOut { // POST - return 200 +remove cookie
    user_id: string;
}

export interface iRegister {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface iRegisterResponse {
  error: boolean
  message: string
}