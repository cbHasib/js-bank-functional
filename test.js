/* Logo

    Support
    Blog
    My Classes
    notification0
    cart0
    cart49
    avatar

Complete Web Development Course With Jhankar Mahbub
Assignment 4
assignment
Your Score
38/60
 
 
Course Content
96%

Text Instruction [IMPORTANT]: Module 23: Assignment

23-1 Basic Javascript Problem Solving assignment

23-2 Assignment Bonus And How To Submit This Assignment

    Logo

Level-4, 34, Awal Centre, Banani, Dhaka
Official: web@programming-hero.com

    Helpline : 01322810867 , 01322810873 (Available : Sat - Thu, 10:00 AM to 7:00 PM)
    Neptune by Programming Hero

    Blog
    Success
    About us
    Refund policy
    Terms and Conditions
    Privacy & App Privacy Policy

...
Copyright © 2022 Programming-hero.com
Wow! Congratulations!

You are rewarded for awesome performance
1 */
// problem-1
function radianToDegree(radian) {
  if (typeof radian === "number") {
    const pi = Math.PI;
    let degree = radian * (180 / pi);
    degree = degree.toFixed(2);
    degree = parseFloat(degree);
    return degree;
  } else {
    return "Please, input valid value";
  }
}
// problem-2
function isJavaScriptFile(fileName) {
  if (typeof fileName === "string") {
    if (fileName.endsWith(".js")) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please, input a string value";
  }
}
// problem-3
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  const dieselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;
  if (
    typeof dieselQuantity === "number" &&
    typeof petrolQuantity === "number" &&
    typeof octaneQuantity === "number"
  ) {
    let constForDisel = dieselPrice * Math.abs(dieselQuantity);
    let constForPetrol = petrolPrice * Math.abs(petrolQuantity);
    let constForOctane = octanePrice * Math.abs(octaneQuantity);
    let totalCost = constForDisel + constForPetrol + constForOctane;
  } else {
    return "Please input a valid value";
  }
}
// problem-4
function publicBusFare(persons) {
  let busSeat = 50;
  let microbusSeat = 11;
  // check error
  if (typeof persons !== "number" || persons < 0) {
    return "Please, enter valid number !";
  } else {
    // check persons are less than 50
    if (persons < busSeat) {
      persons = persons % microbusSeat;
    } else {
      persons = persons % busSeat;
      persons = persons % microbusSeat;
    }
    return persons * 250;
  }
}
// problem-5
function isBestFriend(person1, person2) {
  if (
    typeof (person1, person2) === "object" &&
    Object.keys(person1, person2).length !== 0 &&
    !Array.isArray(person1, person2)
  ) {
    if (person1.name === person2.friend && person1.friend === person2.name) {
      return true;
    } else {
      return false;
    }
  } else {
    return "give two object with name and friend property";
  }
}


const friend1 = {name: 'Hasib', age: 21, friend: 'Rakib'};
const friend2 = {name: 'Rakib', age: 21, friend: 'jhasib'};

console.log(isBestFriend(friend1, friend2));
