const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

// MAP
//1. Get an array of all names
const names = characters.map((character) => {
  return character.name;
});

//2.  Get an array of all heights
const heights = characters.map((character) => {
  return character.height;
}); 

//3. Get an array of all first names
const firstNames = characters.map((character) => {
  return character.name.split(' ')[0];
});

console.log(names)
console.log(height)
console.log(firstNames)

// FILTER
//1. Get characters with mass greater than 100
const findMass = characters.filter(character => {
  if (character.mass > 100) {
    return character.mass;
  }
});

//2. Get characters with height less than 200
const findHeight = characters.filter(character => {
  if (character.height < 200) {
    return character.height;
  }
});

//3. Get all male characters
const findMen = characters.filter(character => {
  if (character.gender == "male") {
    return character.gender;
  }
});

//4. Get all female characters
const findWomen = characters.filter(character => {
  if (character.gender == "women") {
    return character.gender;
  }
});

console.log(findMass);
console.log(findHeight);
console.log(findMen);
console.log(findWomen);

// EVERY
//1. Does every character have blue eyes? (FALSE)

//2. Does every character have mass more than 40? (TRUE)

//3. Is every character shorter than 200? (FALSE)

//4. Is every character male? (FALSE)

// SOME
//1. Is there at least one male character? (TRUE)

//2. Is there at least one character with blue eyes? (TRUE)

//3. Is there at least one character taller than 200? (TRUE)

//4. Is there at least one character that has mass less than 50? (TRUE)
