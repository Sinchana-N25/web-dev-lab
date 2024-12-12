function Check(){
 if (toggleSwitch.checked) {
    console.log('Switch is on');
    body.classList.remove("dark");
  } else {
    console.log('Switch is off');
    body.classList.add("dark");
  }
}

let toggleSwitch = document.querySelector('.toggle-switch input');
let body = document.querySelector("body");
toggleSwitch.addEventListener('change',Check)
