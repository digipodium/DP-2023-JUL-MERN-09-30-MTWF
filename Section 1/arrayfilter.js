const prices = [ 2300, 499, 233, 199, 450, 3400, 1800 ];

const filteredprice1 = prices.filter( (p) => { return p<500 } );

console.log(filteredprice1);

const names = [ 'Raju', 'Kaliya', 'pinki' ];

// create a filter to get names with length greater than 5

const filteredNames = names.filter( (name) => { return name.length >= 5 } );

console.log(filteredNames);

