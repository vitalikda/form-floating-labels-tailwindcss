"use strict";

document.getElementById("button").addEventListener("click", toggleError);
const errMessages = document.querySelectorAll("#error");

function toggleError() {
  // Show error message
  errMessages.forEach((el) => {
    el.classList.toggle("hidden");
  });

  // Show red border and text
  const allBorders = document.querySelectorAll(".border-gray-200");
  const allTexts = document.querySelectorAll(".text-gray-500");
  allBorders.forEach((el) => {
    el.classList.toggle("border-red-600");
  });
  allTexts.forEach((el) => {
    el.classList.toggle("text-red-600");
  });
}
