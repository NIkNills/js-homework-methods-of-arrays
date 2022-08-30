"use strict";

function randomArrayGenerator(length, num) {
  return new Array(length)
    .fill(1)
    .map((item) => (item = Math.round(Math.random() * num)));
}

function arraySplicer(arr, str) {
  return arr.filter((item) => item !== str);
}
