const user = { name : 'Raju' , email : 'raju@mail.com', password: '8459' };

console.log( user.name );
console.log( user['email'] );

user.address = 'Lucknow';

console.log( user );

user.password = '1234';
console.log( user );

let customkey = 'email';

console.log(user[customkey]);
user[customkey] = 'raju@hotmail.com';

console.log(user);

let smartphone = {
    brand : 'Samsung',
    model : 'S21',
    price : 70000,
    color : 'Black',
};

smartphone.color = ['Black','White', 'Blue'];

console.log(smartphone.color[2]);

smartphone.color.push('Red');

console.log(smartphone);