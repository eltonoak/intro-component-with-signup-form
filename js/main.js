const form = document.getElementById("form");
//Getting all inputs fields 
const inputs = document.querySelectorAll("input");
//Getting all error icon
const icons = document.querySelectorAll("img.hide");
//Getting all text error field
const texts = document.querySelectorAll("div.hide");

form.addEventListener('submit', (e) => {

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
      inputs[i].classList.add("wrong");
      icons[i].classList.remove("hide");
      texts[i].classList.remove("hide");
    } else {
      inputs[i].classList.remove("wrong");
      icons[i].classList.add("hide");
      texts[i].classList.add("hide");


    }
  }
  e.preventDefault();
});
