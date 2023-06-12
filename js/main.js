let userArr = [];
let giveArrLength = prompt(`Task №1

   Створити масив, довжину та елементи якого задає користувач.
Потім відсортувати масив за зростанням.
Потім видалити елементи з масиву з 2 по 4 (включно).
У міру змін виводити вміст масиву на сторінку.

Введіть довжину Вашого масиву:`);


const giveArrElements = (length) => {
   for(let i = 0; i < Number(length); i++) {
      userArr.push(
         prompt(`Введіть елемент №${i + 1} Вашого масиву:`)
      );
   }
}

giveArrElements(giveArrLength);
let mainArray = document.querySelector('.array');
mainArray.innerHTML = `Початковий вигляд масиву: [${userArr}]`;

userArr.sort((a, b) => a - b);
let sortedArray = document.querySelector('.sorted_array');
sortedArray.innerHTML = `Відсортований вигляд масиву: [${userArr}]`;

userArr.splice(1,3);
let changedArray = document.querySelector('.changed_array');
changedArray.innerHTML = `Змінений масив (видалені елементи з 2 по 4(включно)): [${userArr}]`;


let taskArr = [
   16,
   -37,
   54,
   -4,
   72,
   -56,
   47,
   4,
   -16,
   25,
   -37,
   46,
   4,
   -51,
   27,
   -63,
   4,
   -54,
   76,
   -4,
   12,
   -35,
   4,
   47
];

let calcPositiveAmount = 0;
let calcPositiveSum = 0;
let calcPositiveEvenSum = 0;
let calcPositiveNonEvenSum = 0;
let calcPositiveProduct = 1;
let calcNegativeAmount = 0;
let calcNegativeSum = 0;

let maxValue = Math.max(...taskArr);
let minValue = Math.min(...taskArr);
let findMaxIndex,findMinIndex;

let findEvenPositiveAmount = 0;
let findNonEvenPositiveAmount = 0;
let findEvenNegativeAmount = 0;
let findNonEvenNegativeAmount = 0;


for (let i = 0; i < taskArr.length; i++) {

   switch (true){
      case taskArr[i] > 0:
         calcPositiveAmount += 1;
         calcPositiveSum += taskArr[i];
         calcPositiveProduct *= taskArr[i];
         if (taskArr[i] % 2 === 0) {
            findEvenPositiveAmount += 1;
            calcPositiveEvenSum += taskArr[i];
         } else if (taskArr[i] % 2 !== 0) {
            findNonEvenPositiveAmount += 1;
            calcPositiveNonEvenSum += taskArr[i];
         }
      break;
      case taskArr[i] < 0:
         calcNegativeAmount += 1;
       //calcNegativeSum += Math.abs(taskArr[i]);
         if (taskArr[i] % 2 === 0) {
            findEvenNegativeAmount += 1;
         } else if (taskArr[i] % 2 !== 0) {
            findNonEvenNegativeAmount += 1;
         }
      break;
   }

   switch (taskArr[i]) {
      case maxValue: 
         findMaxIndex = i + 1;
      break;
      case minValue:
         findMinIndex = i + 1;
      break;
   }

}

console.log(`Сума позитивних елементів: ${calcPositiveSum}. Кількість позитивних елементів: ${calcPositiveAmount}.`);
console.log(`Мінімальний елемент масиву: ${minValue}. Його порядковий номер: ${findMinIndex}.`);
console.log(`Максимальний елемент масиву: ${maxValue}. Його порядковий номер: ${findMaxIndex}.`);
console.log(`Кількість негативних елементів: ${calcNegativeAmount}.`);
console.log(`Кількість непарних позитивних елементів: ${findNonEvenPositiveAmount}.`);
console.log(`Кількість парних позитивних елементів: ${findEvenPositiveAmount}.`);
console.log(`Сума парних позитивних елементів: ${calcPositiveEvenSum}.`);
console.log(`Сума непарних позитивних елементів: ${calcPositiveNonEvenSum}.`);
console.log(`Добуток усіх позитивних елементів: ${calcPositiveProduct.toExponential()}.`);
for (let j = 0; j < taskArr.length; j++) {
   if (taskArr[j] !== maxValue) {
      taskArr[j] = 0;
   }
}
console.log(`Найбільший серед елементів масиву: ${maxValue}. Решта занулена, кінцевий вигляд масиву:
[${taskArr}].`);