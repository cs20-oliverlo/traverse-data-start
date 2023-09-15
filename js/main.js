// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  let yesNum = 0;
  let noNum = 0;
  let maybeNum = 0;

  // Count Number of Yes', No's, and Maybe's
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] == "Yes") {
      yesNum++;
    } else if (surveyData[i] == "No") {
      noNum++;
    } else {
      maybeNum++;
    }
  }

  // and output the results in the outputEl.
  outputEl.innerHTML = `Survey Data <br> Number of Yeses: ${yesNum} <br> Number of Nos: ${noNum} <br> Number of Maybes: ${maybeNum}`;
  console.log(surveyData);
}

function traverseAgeData() {
  let under18 = 0;
  let people18To35 = 0;
  let people36To65 = 0;
  let above65 = 0;

  // Count Number of minors, young adults, middle-age adults, seniors
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      under18++;
    } else if (ageData[i] >= 18 && ageData[i] <= 35) {
      people18To35++;
    } else if (ageData[i] >= 36 && ageData[i] <= 65) {
      people36To65++;
    } else {
      above65++;
    }
  }

  // and output the results in the outputEl.

  outputEl.innerHTML = `Age Data <br> Under 18: ${under18} <br> 18-35: ${people18To35} <br> 36-65: ${people36To65} <br> Above 65: ${above65}`;
  console.log(ageData);
}

function traverseNumberData() {
  let evenNum = 0;
  let oddNum = 0;

  // Count the Amount of Even Numbers and Odd Numbers
  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      evenNum++;
    } else {
      oddNum++;
    }
  }

  // and output the results in the outputEl.
  outputEl.innerHTML = `Number Data <br> Even #s: ${evenNum} <br> Odd #s: ${oddNum}`;
  console.log(numberData);
}
