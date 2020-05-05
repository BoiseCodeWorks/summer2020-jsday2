//#region morningchallenge

let kirklandManu = {
  companyName: "Kirkland",
  location: "Seattle, WA",
  phone: 8002552525
}

let trailMix = {
  weight: 2,
  wrapperColor: "Blue",
  mayContain: ["Chocolate", "Eggs", "Wheat", "Tree Nuts"],
  tasty: true,
  ingredients: "M&Ms, Almond, Peanut, Cashews, Raisins",
  manufacturer: kirklandManu
}

let costcoPizza = {
  diameter: 18,
  mayContain: ["Gluten", "Dairy"],
  tasty: true,
  weight: 40,
  manufacturer: kirklandManu
}


// console.log(trailMix.mayContain);
// trailMix.mayContain[1]

for (let i = 0; i < trailMix.mayContain.length; i++) {
  // console.log(trailMix.mayContain[i])

  let allergen = trailMix.mayContain[i]
  console.log(allergen)
}

trailMix.mayContain.forEach(allergen => console.log(allergen))

// console.log(costcoPizza.manufacturer);
console.log("For In ");

for (const key in trailMix) {
  // console.log(key);
  // if (trailMix.hasOwnProperty(key)) {
  const element = trailMix[key];
  console.log(element);
  // }
}

console.log(trailMix.ingredients.split(", "));

//#endregion

//#region after challenge


console.error("AFTER MORNING BREAK");


let employeeOne = {
  name: "Jake",
  role: "CEO"
}

let employeeTwo = {
  name: "Brittany",
  role: "Director of Recruiting"
}

let employees = [
  employeeOne,
  {
    name: "Zach",
    role: "COO"
  },
  {
    name: "Mark",
    role: "Instructor"
  }
]

employees.push(employeeTwo)

// @ts-ignore
employees.push({ name: "Tim" })
console.log(employees)

let employeeThree = employees.find(employee => employee.name == "Tim")

// console.log(employeeThree)

employeeThree.role = "Assistant Instructor"

console.log(employees);

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i]
  console.log(employee.role)
}


let word = "Tim Tuesdays"

for (let index = 0; index < word.length; index++) {
  let letter = word[index]
  console.log(letter);
}

for (let i = 1; i <= 100; i++) {
  console.log(i);
}



//#endregion

console.error("function zone");

//#region before lunch/functions

/**
 * given a greeting, greet a random instructor, or say hello to random instructor without greeting
 * @param {string} greeting 
 */
function greetInstructor(greeting = "Hello, ") {
  // let randomNumber = Math.floor(Math.random() * (employees.length))

  //when selectRandomNumber is invoked, the method on line 142 is expecting a parameter
  let randomNumber = selectRandomNumber(employees.length)
  // console.log(randomNumber)
  console.log(greeting + employees[randomNumber].name);

}

greetInstructor()
greetInstructor("Wazzzup ")

/**
 * When invoked, will return a random number within employee range
 * @returns number
 */
function selectRandomNumber(num) {
  return Math.floor(Math.random() * num)
}



let students = [
  {
    name: "Justin",
    role: "Student"
  },
  {
    name: "Blake",
    role: "Student"
  },
  {
    name: "Spenser",
    role: "Student"
  }
]

let users = [...employees, ...students]
console.log(users)
/**
 * will take in array and optional greeting, will greet random user based on role
 * @param {array} arr 
 * @param {string} greeting 
 */
function greet(arr, greeting = "Hello, ") {
  let randomNumber = selectRandomNumber(arr.length)
  console.log(greeting + arr[randomNumber].name);
}

greet(users)



//#endregion


let demoObj = {}

function addProp(obj, key, value) {
  obj[key] = value
}

addProp(demoObj, "tacos", 100)



