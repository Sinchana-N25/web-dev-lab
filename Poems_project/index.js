function displayPoem(response) {
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = response.data.answer; // Directly insert the HTML

  let pTags = poemElement.querySelectorAll("p"); // Select all p tags

  pTags.forEach(function (p) {
    new Typewriter(p, {
      strings: p.innerHTML,
      autoStart: true,
      delay: 20,
      cursor: "",
    });
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = SHECODES_KEY;
  let context =
    "You are a motivational Poem expert and love to write short poems in any language. Your mission is to generate a 4 line poem. Please respond with HTML code, using <p> tags for each line. If language is specified in 'instructionsInput', generate it in that language please. Make sure to follow the user instructions. Do not include a title to the poem.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
