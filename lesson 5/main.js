// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function pl(a, b) {
//     let res = (a+b)*2;
//     console.log(res);
// };
//
// pl(5, 2);


// - створити функцію яка обчислює та повертає площу кола з радіусом r


// function pl(r) {
//     let res = Math.PI * Math.pow(r, 2);
//     console.log(res)
// };
//
// pl(2);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function pl(h, r) {
//     let res = 2 * Math.PI * h * r;
//     console.log(res)
// }
//
// pl(5, 2);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['a', 'b'];
//
// function one(arr) {
//     for (const i of arr) {
//         console.log(i);
//     }
// }
//
// one(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function create(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// create('Hello world!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function create(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`);
// }
//
// create("hi!");
//

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function create(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//
//     document.write(`</ul>`)
// }
//
// create('hi', 17);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1, 2, 'a', 'b', true, false];
//
// function create(array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// create(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         name: 'Sviat',
//         age: 19,
//     },
//     {
//         name: 'Ihor',
//         age: 29,
//     },
//     {
//         name: 'Vasya',
//         age: 39,
//     }
// ]
//
// function create(array) {
//     for (const arrayElement of array) {
//         document.write(`Name - ${arrayElement.name}
//         Age - ${arrayElement.age}`)
//     }
// }
//
// create(arr);

// - створити функцію яка повертає найменьше число з масиву

//Зробив за допомогою відео

// let arr = [1, 2, 200, 0.5, 12, 20, -1];
//
// function small(array) {
//         let min =  array[0]
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
//
// let foo1 = small(arr);
// console.log(foo1);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1, 2, -1, 10, 20];
//
// function sum(array) {
//     let start = 0;
//     for (const item of array) {
//         start += item;
//     }
//
//     return start;
// }
//
// console.log(sum(arr));