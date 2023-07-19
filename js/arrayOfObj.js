import { printMen } from './modules/forEachFn.js';
import { youngWomen } from './modules/filterFn.js';
console.log('arrayOfObj.js file was loaded');

const people = [
  {
    // 0
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    // 1
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/* 
{
  name: 'Jonas',
  surname: 'Jonaitis',
  sex: 'male',
  age: 26,
  income: 1200,
  married: false,
  hasCar: false,
},
*/
console.table(people);
const skArr = [1, 4, 5];

// printMen(people);

// const moterys = youngWomen(people);

// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.

function printDriverGender() {
  // sukkti cikla
  people.forEach((personObj) => {
    // patikrinti ar asmuo vairuoja
    if (personObj.hasCar === true) {
      // jei taip atspausdinti jo lyti
      console.log(personObj.name, 'vairuoja ===', personObj.sex);
    }
  });
}
printDriverGender();
