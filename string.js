const sentence = "  javascript — это просто!  ";
console.log (sentence.trim().slice(0, 1).toUpperCase() + sentence.trim().slice(1));


const name = "Иванов Иван";
const group = "ИСР-21";
const average = 4.75;
const sntc = `Студент ${name}, группа ${group}, средний бал: ${average}`;
console.log(sntc);


const date = "2025-03-15";
const datemas = date.split("-");
const newdate = `${datemas[2]}.${datemas[1]}.${datemas[0]}`; 
console.log(newdate);


const str = "Node.js разработчик";
const starts = str.startsWith("Node");
const ends = str.endsWith("разработчик");
console.log("Начинается на Node:", starts); 
console.log("Заканчивается на разработчик:", ends); 


const num = 42;
console.log(String(num).padStart(8, "0"))


