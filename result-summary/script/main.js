const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];
  
// Define an array of numbers to use in the query selectors
const numbers = [0, 1, 2, 3];

// Loop through the array and create variables and event listeners
numbers.forEach(number => {
  // Create variables for the see button, card container, and close button
  const img = document.querySelector(`#img-${number}`);
  const name = document.querySelector(`#name-${number}`);
  const score = document.querySelector(`#score-${number}`);

  img.src = data[number].icon;
  name.innerHTML = data[number].category;
  score.innerHTML = data[number].score;
  
});




  