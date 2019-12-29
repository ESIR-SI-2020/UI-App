export class User {
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







// class User {
// 	String username;
// 	String password;
// 	String email;
// 	String photoUrl;
// 	String bio;
// 	Address address;
// 	List<String> friendsId;
// }

// class Address {
// 	String postalCode;
// 	String street;
// 	Integer streetNumber;
// 	String complement;
// }

