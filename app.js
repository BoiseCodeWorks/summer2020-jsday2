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


