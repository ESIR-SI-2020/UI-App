export interface User {
    id: String;
    username: String;
    password: String;
    email: String;
    address: {
        postalCode: string;
        street: string;
        streetNumber: number;
        complement: String;
    };
    friends?: Array<string>; //list des @emails des friends
}

