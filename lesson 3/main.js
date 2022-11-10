// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt(`Write number`);
//
// if (x != 0) {
//     console.log('Вірно')
// } else {
//     console.log(`Невірно`)
// };


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

// let time = +prompt('Write time(0-59)');
//
// if (time < 16 && time > -1) {
//     console.log('First quarter');
// } else if (time > 15 && time < 31) {
//     console.log(`Second quarter`)
// } else if (time > 30 && time < 45) {
//     console.log(`Thirty quarter`)
// } else if (time > 44 && time < 60) {
//     console.log(`Four quarter`);
// } else {
//     alert(`Введіть від 0 до 59`);
// };


// let day = +prompt(`Write number(1-31)`);
//
// if (day > 0 && day < 11) {
//     console.log(`First dekada`);
// } else if (day > 10 && day < 21) {
//     console.log(`Second dekada`);
// } else if (day > 20 && day < 32) {
//     console.log(`Thirty dakada`);
// } else {
//     alert(`Write from 1 to 31`)
// };


// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt(`Write number of day from 1 to 5`);
//
// switch (day) {
//     case 1:
//         console.log(`Monday`);
//         break;
//
//     case 2:
//         console.log(`Tuesday`);
//         break;
//
//     case 3:
//         console.log(`Wednesday`);
//         break;
//
//     case 4:
//         console.log(`Thursday`);
//         break;
//
//     case 5:
//         console.log(`Friday`);
//         break;
//
// };


// //- Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let num1 = 222;
// let num2 = 222;
//
// if (num1 > num2) {
//     console.log(`Bigger number ${num1}`);
// } else if (num1 < num2) {
//     console.log(`Bigger number ${num2}`)
// } else if (num1 = num2) {
//     console.log(`Num1 = Num2. Write two another number!`)
// };
//



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt('Write anyone here') ||;
//
// if (x != null || x != undefined) {
//     console.log(x);
// } else {
//     console.log(`Default`);
// };
