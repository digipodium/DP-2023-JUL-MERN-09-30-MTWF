let names = ["Raju", "Shikhar", "sanket", "Abhishek"];

console.log(
  names.filter((name) => {
    return name.startsWith("S") || name.startsWith("s");
  })
);

console.log("raju".startsWith("s"));

let n = 25;
let sqrt = n ** 0.5;
console.log(parseInt(sqrt) == sqrt);

const nums = [25, 625, 100, 3487, 354, 2398, 3, 52];

console.log(
  nums.filter((n) => {
    let sqrt = n ** 0.5;
    return parseInt(sqrt) == sqrt;
  })
);

const checkPrime = (num) => {
    if(num<2) return false;
    if(num==2) return true;
  let prime = true;

  for (let i = 2; i < 7; i++) {
    if (num % i === 0) {
      console.log("not prime");
      prime = false;
      return false;
    }
  }

  if (prime) return true;
};

const nums2 = [2, 7, 334, 90, 543, 235, 72, 13];

console.log(nums2.filter(checkPrime));