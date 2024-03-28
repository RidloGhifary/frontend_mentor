const lists = document.querySelectorAll("#list");
const inputs = document.querySelectorAll("input[type='radio']");
const submit = document.getElementById("submit");
const thankSec = document.getElementById("thanks");
const ratingSec = document.getElementById("rating-sec");
const userChoose = document.getElementById("user-choose");

let rating = "";

lists.forEach((list, index) => {
  list.addEventListener("click", () => {
    // Uncheck all radio buttons
    inputs.forEach((input) => {
      input.checked = false;
    });

    // Check the corresponding radio button
    inputs[index].checked = true;

    // Remove 'bg-orange' class from all lists
    lists.forEach((list) => {
      list.classList.remove("bg-mediumGrey");
      list.classList.remove("text-white");
    });

    // Add 'bg-orange' class to the clicked list
    list.classList.add("bg-mediumGrey");
    list.classList.add("text-white");

    rating = list.querySelector("label").textContent;
  });
});

submit.addEventListener("click", () => {
  if (rating !== "") {
    // console.log(ratingSec);
    ratingSec.classList.add("hidden");
    thankSec.classList.remove("hidden");
    userChoose.innerHTML = rating;
  } else {
    alert("Please choose");
  }
});
