// Task 1
let age = prompt("Скільки вам років?");
age = Number(age);
if (age >= 0 && age <= 12) {
  alert("Ви дитина");
} else if (age > 12 && age <= 18) {
  alert("Ви підліток");
} else if (age > 18 && age <= 60) {
  alert("Ви дорослий");
} else if (age > 60) {
  alert("Ви пенсіонер");
} else {
  alert("Невірне значення віку");
}

//Task 2 
let numbers = prompt("Введіть число від 0 до 9");
switch (numbers) {
  case "0":
    alert("Спеціальний символ: )");
    break;
  case "1":
    alert("Спеціальний символ: !");
    break;
  case "2":
    alert("Спеціальний символ: @");
    break;
  case "3":
    alert("Спеціальний символ: #");
    break;
  case "4":
    alert("Спеціальний символ: $");
    break;
  case "5":
    alert("Спеціальний символ: %");
    break;
  case "6":
    alert("Спеціальний символ: ^");
    break;
  case "7":
    alert("Спеціальний символ: &");
    break;
  case "8":
    alert("Спеціальний символ: *");
    break;
  case "9":
    alert("Спеціальний символ: (");
    break;
  default:
    alert("Невірне значення числа");
}

// Task 3
let number = prompt("Введіть тризначне число");
number = Number(number);
if (number >= 100 && number <= 999) {
  let str = number.toString();
  let a = str[0];
  let b = str[1];
  let c = str[2];
  if (a == b || a == c || b == c) {
    alert("У числі є однакові цифри");
  } else {
    alert("У числі немає однакових цифр");
  }
} else {
  alert("Невірне значення числа");
}

// Task 4
let year = prompt("Введіть рік");
year = Number(year);
if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
  alert("Рік високосний");
} else {
  alert("Рік не високосний");
}

// Task 5
let num = prompt("Введіть п’ятирозрядне число");
num = Number(num);
if (num >= 10000 && num <= 99999) {
  let str = num.toString();
  let reversed = str.split("").reverse().join("");
  if (str == reversed) {
    alert("Число паліндром");
  } else {
    alert("Число не паліндром");
  }
} else {
  alert("Невірне значення числа");
}

// Task 6
const EUR_RATE = 0.84;
const UAN_RATE = 27.86;
const AZN_RATE = 1.7;

let usd = prompt("Введіть кількість USD");
usd = Number(usd);
let currency = prompt("Виберіть валюту: EUR, UAN або AZN");

switch (currency) {
  case "EUR":
    let eur = usd * EUR_RATE;
    alert(`${usd} USD = ${eur.toFixed(2)} EUR`);
    break;
  case "UAN":
    let uan = usd * UAN_RATE;
    alert(`${usd} USD = ${uan.toFixed(2)} UAN`);
    break;
  case "AZN":
    let azn = usd * AZN_RATE;
    alert(`${usd} USD = ${azn.toFixed(2)} AZN`);
    break;
  default:
    alert("Невірне значення валюти");
}

// Task 7
let sum = prompt("Введіть суму покупки");
sum = Number(sum);
let discount = 0;

if (sum >= 200 && sum < 300) {
  discount = sum * 0.97;
} else if (sum >= 300 && sum < 500) {
  discount = sum * 0.95;
} else if (sum >= 500) {
  discount = sum * 0.93;
} else {
  discount = sum;
}
alert(`Сума до сплати зі знижкою: ${discount.toFixed(2)}`);

//Task 8
let circle = prompt("Введіть довжину кола");
circle = Number(circle);
let square = prompt("Введіть периметр квадрата");
square = Number(square);
let radius = circle / (2 * Math.PI);
let side = square / 4;

if (radius <= side / 2) {
  alert("Коло може поміститися у квадрат");
} else {
  alert("Коло не може поміститися у квадрат");
}

// Task 9
let score = 0;

let question1 = prompt("Питання 1: Яка столиця України?\n a) Львів\n b) Одеса\n c) Київ");
let answer1 = question1.toLowerCase();
if (answer1 === "c" || answer1 === "київ") {
    score += 2;
}

let question2 = prompt("Питання 2: Який найвищий горський хребет у світі?\n a) Альпи\n b) Карпати\n c) Гімалаї");
let answer2 = question2.toLowerCase();
if (answer2 === "c" || answer2 === "гімалаї") {
    score += 2;
}

let question3 = prompt("Питання 3: Яка найбільша планета у Сонячній системі?\n a) Юпітер\n b) Венера\n c) Марс");
let answer3 = question3.toLowerCase();
if (answer3 === "a" || answer3 === "юпітер") {
    score += 2;
}
alert("Кількість набраних балів: " + score);

// Task 10
let date = prompt("Введіть дату (день,місяць,рік)");
let arr = date.split(",");
let day = Number(arr[0]);
let month = Number(arr[1]);
let year1 = Number(arr[2]);
let dateObj = new Date(year1, month - 1, day);
dateObj.setDate(dateObj.getDate() + 1);
let nextDay = dateObj.getDate();
let nextMonth = dateObj.getMonth() + 1;
let nextYear = dateObj.getFullYear();
alert(`Наступна дата: ${nextDay},${nextMonth},${nextYear}`);
