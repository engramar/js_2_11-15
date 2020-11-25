#Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

#Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;
// Only change code above this line

#Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const {today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// Only change code above this line

#Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// Only change code below this line
const { today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
// Only change code above this line

#Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

