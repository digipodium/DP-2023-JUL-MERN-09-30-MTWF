for(let i=0; i<10; i++){
    console.log(i);
};

let num = 89;
let prime = true;

for(let i=2; i<7; i++){
    if(num%i === 0){
        console.log('not prime');
        prime = false;
        break;
    }
};

if(prime) console.log('prime');

// WAP to print all number divisible by 7 and 11 from 100 to 300.
// WAP to print fibonacci series below 100.
// WAP to print fibonacci series of 10 numbers.