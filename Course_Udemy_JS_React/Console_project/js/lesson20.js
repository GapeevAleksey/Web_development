'use strict';
const obj = {
  width: '1000px',
  height: '800px',
  color: {
    fontColor: 'red',
    bg: 'green',
  },
  display: 'flex',
  makeTest: function () {
    console.log('Test');
  },
};
obj.makeTest();

// for (let key in obj) {
//   if (typeof obj[key] === 'object') {
//     for (let i in obj[key]) {
//       console.log(`Свойство ${key}: Свойство ${i} имеет значение ${obj[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${obj[key]}`);
//   }
// }

// console.log(Object.keys(obj));
console.log(Object.entries(obj)[2]);
