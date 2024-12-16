function Info() {
  alert("Welcome to my webpage on novels!");
  let q = prompt("Do you read books?");
  if (q.toLowerCase() == "yes") {
    alert("Great XD");
  } else {
    alert(
      "You should really read some books. Checkout my Goodreads for refence"
    );
  }
}
function Dark() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    button.classList.remove("dark button");
  } else {
    body.classList.add("dark");
    button.classList.add("dark button");
  }
}
let button = document.querySelector(".read1");
button.addEventListener("click", Dark);
button.addEventListener("click", Info);
