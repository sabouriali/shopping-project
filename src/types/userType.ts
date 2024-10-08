export type Geolocation = {
  lat: string;
  long: string;
};

export type Address = {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number | string;
  zipcode: string;
};

export type Name = {
  firstname: string;
  lastname: string;
};

export type User = {
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
};
