console.log('hello javascript');

num = 35;

console.log(num);

message = "Nice";

console.log(message);

console.log( typeof num );
console.log( typeof message );

age = 30;

if(age >= 18){
    console.log('eligible for DL');

    a = 'nice';
    let b = 'this should be local';

    console.log(b);

    const c = 'this is constant';

    c = 'this is not allowed';

}else{
    console.log('not eligible for DL');
}

console.log(a);
console.log(c);