const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const canDrink = ages.filter(age => age > 21);
console.log(canDrink);

const agesSorted = ages.sort((a,b) => a - b);
console.log(agesSorted);

const agesSum = ages.reduce((total, age) => total + age, 0);
console.log(agesSum);