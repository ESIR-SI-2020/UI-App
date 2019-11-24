export interface User {
    name: String;
    password: String;
    email: String;
    bio: String;
    address: {
        postalCode: string;
        street: string;
        streetNumber: number;
        complement: String;
    };
    friends: Array<User>;
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

