function giveAnswer(response) {
  let pun = response.data.answer;
  new Typewriter(joke, {
    strings: pun,
    autoStart: true,
    cursor: "",
    delay: 40,
  });
}

let joke = document.getElementById("joke");
let button = document.querySelector("#button");

let apiKey = "bob016b0434454afb1b302d4ct21a307";
let context =
  "Generate a unique pun that has never been used before. Avoid repeating any previous puns.";
let prompt = "Tell me a good pun that uses wordplay in kannada language.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

button.addEventListener("click", () => {
  axios.get(apiUrl).then(giveAnswer);
});
