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


const smartphoneList = [
    { brand : 'Samsung', model : 'S21', price : 70000, color : ['Black', 'Blue'] },
    { brand : 'Samsung', model : 'S23', price : 86000, color : ['Black', 'Blue'] },
    { brand : 'Apple', model : 'iPhone 12', price : 80000, color : ['White', 'Red', 'Yellow']},
    { brand : 'OnePlus', model : '9 Pro', price : 60000, color : ['Blue', 'White'] },
    { brand : 'OnePlus', model : 'Nord', price : 35000, color : ['Blue', 'White'] },
    { brand : 'Xiaomi', model : 'Mi 11', price : 50000, color : ['Black', 'Gold'] },
];

// syntax to acces price of opeplus 9 pro
console.log(smartphoneList[1].price);

// syntax to add blue color to mi 11
smartphoneList[3].color.push('Blue');

// smartphoneList[1].color.splice(1, 2);
smartphoneList[1].color = smartphoneList[1].color.slice(0, 1);
console.log(smartphoneList[1].color);


// use filter to get all phones with price less than 70000
const filteredResult = smartphoneList.filter((phone) => { return phone.price < 70000 })
console.log(filteredResult);

// const result2 = smartphoneList.filter((phone) => { return phone.brand.toLowerCase() === 'samsung'.toLowerCase() });
const result2 = smartphoneList.filter((phone) => { return phone.brand.toLowerCase().includes('mi'.toLowerCase()) });
console.log(result2);

// use filter to get all phones with color blue
// use filter to get all phones with color blue and price less than 70000

const result3 = smartphoneList.filter((phone) => { return phone.color.includes('Blue') && phone.price <= 70000 });
console.log(result3);


const brands = smartphoneList.map((phone) => {return phone.brand})

console.log(new Set(brands));