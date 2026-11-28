const book = {
    title: "Мастер и Маргарита",
    author: "Булгаков М.А.",
    year: "1967 г.",
    pages: "480 стр.",
    available: true,
    info() {
        return `${this.title}, ${this.author}, ${this.year}, ${this.pages}`;
    }
}
console.log(book.info());


const {title, author} = book;
const {rating = 0} = book;
console.log(title); 
console.log(author);
console.log(rating);


const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
const passed = students.filter(students => students.passed == true).map(students => students.name);
console.log(passed);
const sum = students.reduce((acc, student) => acc + student.grade, 0);
const average = (sum / students.length).toFixed(2);
console.log(average);


function mergeUsers(user1, user2) {
    return {...user1, ...user2}
}
const u1 = { name: "Иван", age: 20, city: "Казань" };
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" };
const mu = mergeUsers(u1, u2);
console.log(mu);



function countByField(arr, field) {
  const res = {};
  for (const item of arr) {
    const value = item[field];
    res[value] = (res[value] ?? 0) + 1;
  }
  return res;
}
console.log(countByField(students, "passed"));
