import React from "react";
import "./styles.css";
import { quizData } from "./data.js";

export default function App() {
  let obj = quizData.quizzes;

  let scoresOne = [];
  let scoresTwo = [];
  let nameOne = [];
  let nameTwo = [];

  quizData.quizzes.forEach(function(element) {
    for (let i = 0; i < element.scoreOne.length; i++) {
      let name = element.scoreOne[i].first + " " + element.scoreOne[i].last;
      //console.log(name);
      nameOne.push(name);
      scoresOne.push(element.scoreOne[i].score);
    }

    for (let i = 0; i < element.scoreTwo.length; i++) {
      let name = element.scoreTwo[i].first + " " + element.scoreTwo[i].last;
      //console.log(name);
      nameTwo.push(name);
      scoresTwo.push(element.scoreTwo[i].score);
    }
  });

  console.log(scoresOne);
  console.log(scoresTwo);
  console.log(nameOne);
  console.log(nameTwo);

  function getAvg(scoreArray) {
    let sum = scoreArray.reduce((previous, current) => (current += previous));
    let avg = Math.round(sum / scoreArray.length);
    return avg;
  }

  function getMax(scoreArray) {
    let maxScore = Math.max(...scoreArray);
    return maxScore;
  }

  function getMin(scoreArray) {
    let minScore = Math.min(...scoreArray);
    return minScore;
  }

  function getNameMax(scor1, name2) {
    var x = getMax(scor1);
    //console.log(x);
    for (var z = 0; z < scor1.length; z++) {
      if (scor1[z] === x) {
        return name2[z];
      }
    }
  }

  function getNameMin(scor1, name2) {
    var x = getMin(scor1);
    //console.log(x);
    for (var z = 0; z < scor1.length; z++) {
      if (scor1[z] === x) {
        return name2[z];
      }
    }
  }

  return (
    <div className="App">
      <h1>Assignment 1 - JSX</h1>
      <h2>Quiz Results</h2>
      <div class="one" id="one">
        {obj.map(s => s.quizOne + ": ")}
        {getAvg(scoresOne)}, max: {getMax(scoresOne)} (
        {getNameMax(scoresOne, nameOne)}), min: {getMin(scoresOne)} (
        {getNameMin(scoresOne, nameOne)})
      </div>
      <div class="two" id="two">
        {obj.map(s => s.quizTwo + ": ")}
        {getAvg(scoresTwo)}, max: {getMax(scoresTwo)} (
        {getNameMax(scoresTwo, nameTwo)}), min: {getMin(scoresTwo)} (
        {getNameMin(scoresTwo, nameTwo)})
      </div>
    </div>
  );
}
