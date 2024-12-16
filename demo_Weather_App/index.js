function details() {
  let city = prompt("What city do you live in?");
  let temperature = prompt("What temperature is it?");
  let h1 = document.querySelector("h1");
  if (temperature > 20 && temperature < 40) {
    h1.innerHTML = "😄<br />Currently " + temperature + "°C in " + city;
  } else if (temperature <= 20 || temperature >= 40) {
    h1.innerHTML = " 🥺<br />Currently " + temperature + "°C in " + city;
  }
}

let button = document.querySelector("button");
button.addEventListener("click", details);
