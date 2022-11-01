const sam = {
  age: 30,
  name: "Sam",
  pet: [{ type: "gecko", name: "leopard" }],
  email: "sam@sam.com",
};

// destructure:

let { name, age, pet, email } = sam;
console.log(name);
console.log(age);
console.log(pet);
console.log(email);

const favFood = ["Fish & chips", "Sausages and mash", "apples"];

let [bestFood, secondFood] = favFood;
console.log(bestFood);
console.log(secondFood);

console.log(favFood[2]);

// spead operators

const brothersFavFood = [...favFood, "Beans and toast"];

favFood.pop();
console.log(brothersFavFood);
console.log(favFood);

const ben = {
  ...sam,
  name: "Ben",
  email: "ben@ben.com",
};

console.log(ben);
