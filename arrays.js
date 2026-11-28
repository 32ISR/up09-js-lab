const grades = [4, 5, 3, 5, 2, 4, 5, 3];
const sum = grades.reduce((acc, grade) => acc + grade, 0);
const average = (sum / grades.length).toFixed(2);
console.log(average);


const mt3 = grades.filter(n => n > 3);
console.log(mt3);

const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"];
console.log(fruits.sort().join(", "));


const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
];
const pr = products.filter(products => products.price < 10000);
console.log(pr);
const names = products.map(products => products.name)
console.log(names)
const totalpice = products.reduce((acc, product) => acc + product.price, 0);
console.log("Суммарная стоимость:" + totalpice);


numbers = [12, 45, 7, 33, 18];
gt40 = `Есть ли число больше 40: ${numbers.some(num => num >40)}`;
gt5 = `Все ли числа больше 5: ${numbers.every(num => num > 5)}`;
console.log(gt40);
console.log(gt5); 
