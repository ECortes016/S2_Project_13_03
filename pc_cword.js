"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Emmanuel Cortes Castaneda
   Date: 3.27.19  
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

// Used to reference all letters in the crossword puzzle
var allLetters;

// Used to reference current letter selected
var currentLetter;

// Used to reference the letters used in the currently selected across and down clue
var wordLetters;

// Used to reference the across clue currently selected in the puzzle (Carey)
var acrossClue;

// used to reference the down clue currently selected in the puzzle (Carey)
var downClue;

// Stores the current typing direction (either to the right or down); set its initial value to “right” (Carey)
var typeDirection;

window.onload = init;

function init() {
      allLetters = document.querySelectorAll("table#crossword span");
      currentLetter = allLetters[0];

      var acrossID = currentLetter.dataset.clueA.value;
      var downID = currentLetter.dataset.clueD.value;

      acrossClue = document.getElementById("acrossID");
      downClue = document.getElementById("downID");

      formatPuzzle(currentLetter);

      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.cursor = pointer;
      }
}


function formatPuzzle(puzzleLetter) {
      currentLetter = puzzleLetter;

      for (var i = 0; allLetters.length; i++) {
            allLetters.style.backgroundColor = "";
      }

      acrossClue.style.color = "";
      downClue.style.color = "";

      if (currentLetter.dataset.clueA !== undefined) {
            acrossClue = document.getElementById("currentLetter.dataset.clueA");
            acrossClue.style.color = "blue";
            document.querySelectorAll("[data-clue-A =" + currentLetter.dataset.clueA.value + "]");
            wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
      }

      if (currentLetter.dataset.clueD !== undefined) {
            downClue = document.getElementById("currentLetter.dataset.clueD");
            downClue.style.color = "blue";
            document.querySelectorAll("[data-clue-D =" + currentLetter.dataset.clueD.value + "]");
            wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
      }

      if (typeDirection = "right") {
            currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
      } else {
            currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
      }
}

/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}