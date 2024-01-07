export interface UserRegister {
  username: string;
  password: string;
  email: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserJwt {
  username: string,
  password: string,
  token:string,
  roles:string
}

export interface Book {
  isbn: string,
  title: string,
  author: string
}

export interface BookToRemove {
  id: number,
  title: string,
  author: string
}

export interface Standort {
  id: number,
  name: string
}
