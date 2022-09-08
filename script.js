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
