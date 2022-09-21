"use strict";

function randomArrayGenerator(length, num) {
  return new Array(length)
    .fill(1)
    .map((item) => (item = Math.round(Math.random() * num)));
}

function arraySplicer(arr, str) {
  return arr.filter((item) => item !== str);
}

function getArrayFromStr() {
  const str = prompt("Please enter value");

  const objArr = [];
  let newStr = "";
  let objStr = "";
  let obj = {};

  if (str.includes("{")) {
    objStr = str.slice(str.indexOf("{"), str.indexOf("}") + 1);
    newStr =
      str.slice(0, str.indexOf("{")) + " {}" + str.slice(str.indexOf("}") + 3);
  } else {
    newStr = str;
  }

  const arr = objStr.split(", ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("{")) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j].includes("}")) {
          objArr.push(arr[j]);
          break;
        }
        objArr.push(arr[j]);
      }
    }
  }

  const newArrJoin = objArr
    .join(", ")
    .split("{")
    .join("")
    .split(", ")
    .map((item) => item.split(": "));

  for (let i = 0; i < newArrJoin.length; i++) {
    obj[newArrJoin[i][0]] = newArrJoin[i][1];
  }

  return newStr.split(", ").map((item) => {
    if (Number(item)) {
      return Number(item);
    } else if (item === "true") {
      return true;
    } else if (item === "false") {
      return false;
    } else if (item === "null") {
      return null;
    } else if (item === "undefined") {
      return undefined;
    } else if (item.includes("[")) {
      return JSON.parse(item);
    } else if (item.includes("{}")) {
      return obj;
    } else {
      return String(item);
    }
  });
}

const arrayOfPersons = [
  {
    name: "Ferdinant",
    surname: "Foch",
    age: 54,
    nationality: "French",
    skill: "Military management",
    zodiacSign: undefined,
    height: 173,
    isAlive: false,
  },
  {
    name: "Jackson",
    surname: "Bricks",
    age: 20,
    nationality: "USA",
    skill: "farmer",
    height: 187,
    specialTrait: "mechanical arms",
    isFictionalCharacter: true,
  },
  {
    name: "Hideo",
    surname: "Kozima",
    age: 56,
    nationality: "USA",
    skill: "game developer",
    height: 173,
    specialTrait: "genius",
    actualGames: ["Death Stranding", "Metal Gear"],
    isAlive: true,
  },
  {
    name: "Kim",
    surname: "Kardashian",
    age: 39,
    nationality: "USA",
    skill: "model",
    height: 159,
    zodiacSign: "scorpio",
  },
  {
    name: "Mia",
    surname: "Khalifa",
    age: 27,
    nationality: "Lebanon",
    skill: "actress",
    height: 157,
    zodiacSign: "saggitarius",
    specialTrait: "very exspressionable",
    isAlive: true,
    isFictionalCharacter: false,
  },
  {
    name: "Herman",
    surname: "Hesse",
    age: 85,
    nationality: "Germany",
    skill: "writer",
    zodiacSign: undefined,
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["Der Steppen Wolf", "Das Glasperlenspiel"],
  },
  {
    name: "Fedor",
    surname: "Dostoevsky",
    age: 60,
    nationality: "Russia",
    skill: "writer",
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["The demons", "The Crime and Punishment", "The Idiot"],
  },
  {
    name: "Doomguy",
    surname: undefined,
    age: undefined,
    nationality: undefined,
    skill: "demon slayer",
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Angry a bit",
  },
  {
    name: "Sonic",
    surname: "The Hedgehog",
    age: 13,
    nationality: undefined,
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Fast as f#@k",
  },
  {
    name: "Bruce",
    surname: "Wayne",
    age: 12,
    isFictionalCharacter: true,
  },
  {
    name: "Ella",
    surname: "Fitzgerald",
    age: 79,
    isFrictionalCharacter: false,
    isAlive: false,
    specialTrait: "Amazing voice",
    signatureSongs: [
      "Cry Me a river",
      "Hello Dolly",
      "Summertime",
      "In a sentimental mood",
    ],
  },
];

const arrayOfPersonsSurnameSort = arrayOfPersons
  .map(({ name, surname, age }) => {
    return {
      name: name === undefined ? null : name,
      surname: surname === undefined ? null : surname,
      age: age === undefined ? null : age,
    };
  })
  .sort((a, b) => (a.surname > b.surname ? 1 : -1));

const arrayOfPersonsLengthSort = arrayOfPersons
  .filter((item) => Object.keys(item).length > 7)
  .sort((a, b) => Object.keys(b).length - Object.keys(a).length);

arrayOfPersons.sort((a, b) => a.age - b.age);

const arrayOfPersonsZodiacSign = arrayOfPersons.filter(
  (item) => item.zodiacSign
);

function checkObjOrArr(item) {
  for (let key in item) {
    if (typeof item[key] === "object" && item[key] !== null) {
      return -1;
    }
  }
  return 1;
}

const arrayOfPersonsSortByObjOrArr = arrayOfPersons.sort(checkObjOrArr);

const newArrayOfPersons = arrayOfPersons.map((item, { id }) => {
  for (let key in item) {
    item.id = Math.floor(100 + Math.random() * 900);
  }

  return item;
});

const ArrayOfPersonsFictionalCharacter = arrayOfPersons
  .filter((item) => item.isFictionalCharacter === true)
  .map((item, { fictionalUniverse }) => {
    for (let key in item) {
      item.fictionalUniverse = null;
    }
    return item;
  });
