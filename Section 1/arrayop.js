// Map
const nums = [23453, 46, 23, 39, 3, 8];

const newNums = [];
for(let i of nums){
    console.log(i ** 2);
    newNums.push(i ** 2);
}

console.log(newNums);


const result = nums.map( (n) => { return n*2 } );
console.log(result);

const prices = [3400, 2347, 99, 27, 494, 988];

const result2 = prices.map( (p) => { return p + p*0.1 } );
console.log(result2);

// use map to get discounted prices at 7.5% discount
const prices2 = [ '$67.89', '$348.99', '$29384.22', '$4.102', '$1.241' ];

// use map to get the prices in integer format

console.log('$823.564'.slice(1));
console.log('sdjhjg'.toUpperCase());
console.log('sdj-hjg'.split('-'));