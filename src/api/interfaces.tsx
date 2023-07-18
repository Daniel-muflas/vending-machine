
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
    id: string;
    balance: number;
    updated_at: string
}

////////////
/// POST ///
////////////
export interface iLogin { // POST 
    username: string;
    password: string;
}

export interface iLoginResponse {
    token: string
    first_name: string;
    last_name: string;
    email: string;
}


export interface iWalletRequest { // POST -> return 200
    id: string;
    amount: number;
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