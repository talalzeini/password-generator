import React, { useState, useEffect } from "react";
import "./App.css";
function getThreeRandom(size) {
  var arr = [];
  while (arr.length < 3) {
    var r = Math.floor(Math.random() * size) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
function getWords(data, setTool) {
  const size = data.words.length;
  const random_three_numbers = getThreeRandom(size);
  setTool([
    data.words[random_three_numbers[0]],
    data.words[random_three_numbers[1]],
    data.words[random_three_numbers[2]],
  ]);
}
function App() {
  const [words, setWords] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  useEffect(() => {
    fetch(`/data`, {})
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        getWords(jsonResponse, setWords);
      })
      .catch((errorMessage) => {
        console.log("Error Reading data " + errorMessage);
      });
  }, [randomNumber]);
  return (
    <>
      <div className="container">
        <h3>
          {words[0]}-{words[1]}-{words[2]}
        </h3>
        <button
          onClick={() => {
            setRandomNumber(Math.random());
          }}
        >
          Generate
        </button>
      </div>
    </>
  );
}

export default App;
