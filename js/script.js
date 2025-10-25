console.log("script.js connected!");

// Store user answers
const answers = {};

// Handle button clicks
document.querySelectorAll(".question-block").forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove previous selections
      buttons.forEach(btn => btn.classList.remove("selected"));
      // Highlight the current selection
      button.classList.add("selected");
      // Save the selected answer
      answers[index] = button.dataset.answer;
      console.log(answers);
    });
  });
});

// Function to display the result
function displayResult() {
  const counts = { visual: 0, auditory: 0, kinesthetic: 0 };

  for (const q in answers) {
    counts[answers[q]]++;
  }

  // Determine the result
  let resultText = "";
  const highest = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );

  if (highest === "visual") {
    resultText = "You are a Visual Learner! You learn best through images, colors, and seeing things in action.";
  } else if (highest === "auditory") {
    resultText = "You are an Auditory Learner! You learn best by listening, speaking, and discussing ideas.";
  } else if (highest === "kinesthetic") {
    resultText = "You are a Kinesthetic Learner! You learn best by doing, moving, and hands-on experiences.";
  }

  // Display the result
  const resultContainer = document.getElementById("result-container");
  const resultTextEl = document.getElementById("result-text");
  resultTextEl.textContent = resultText;
  resultContainer.style.display = "block";
}

// Attach event listener to the result button
document
  .getElementById("show-result")
  .addEventListener("click", displayResult);