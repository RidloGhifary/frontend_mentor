const inputCard = document.getElementById("cardNumber"),
  nameCard = document.getElementById("cardName"),
  monthCard = document.getElementById("mm"),
  yearCard = document.getElementById("yy"),
  cvcCard = document.getElementById("cvc"),
  showCardNumber = document.getElementById("card-number"),
  showNameCard = document.getElementById("card-name"),
  showExpCard = document.getElementById("card-exp-date"),
  showCvcCard = document.getElementById("card-cvc"),
  cardNumberError = document.getElementById("card-error-msg"),
  cardCvcError = document.getElementById("card-cvc-error"),
  cardExpError = document.getElementById("card-exp-error"),
  submitButton = document.getElementById("submit"),
  buttonComplete = document.getElementById("button-complete");

let hasCardError = true;
let hasNameError = true;
let hasExpError = true;
let hasCvcError = true;

const cardNumber = () => {
  const value = inputCard.value;
  const sanitizedValue = value.replace(/\s/g, "");
  const formattedValue = sanitizedValue.replace(/(.{4})/g, "$1 ");

  if (/[a-zA-Z]/.test(value)) {
    cardNumberError.classList.remove("hidden");
    hasCardError = true;
  } else if (sanitizedValue.length > 16) {
    cardNumberError.classList.remove("hidden");
    cardNumberError.innerHTML = "card number should be 16 digit";
    hasCardError = true;
  } else {
    cardNumberError.classList.add("hidden");

    if (value.length < 1) {
      hasCardError = true;
      showCardNumber.innerHTML = "0000 0000 0000 0000";
    } else {
      hasCardError = false;
      showCardNumber.innerHTML = formattedValue.trim();
    }
  }

  checkSubmitButton();
};

const cardName = () => {
  const value = nameCard.value;

  if (value < 1) {
    showNameCard.innerHTML = "Your Name";
    hasNameError = true;
  } else {
    showNameCard.innerHTML = value;
    hasNameError = false;
  }
};

const cardExp = () => {
  const mmValue = monthCard.value;
  const yyValue = yearCard.value;

  if (mmValue.length < 1 && yyValue.length < 1) {
    cardExpError.classList.remove("hidden");
    hasExpError = true;
  } else if (mmValue.length > 2 || yyValue.length > 2) {
    cardExpError.classList.remove("hidden");
    cardExpError.innerHTML = "2 digit is max value";
    hasExpError = true;
  } else if (/[a-zA-Z]/.test(mmValue) || /[a-zA-Z]/.test(yyValue)) {
    cardExpError.classList.remove("hidden");
    cardExpError.innerHTML = "cannot contain alphabet";
    hasExpError = true;
  } else {
    showExpCard.innerHTML = `${mmValue}/${yyValue}`;
    hasExpError = false;
  }

  checkSubmitButton();
};

const cardCvc = () => {
  const value = cvcCard.value;

  if (value.length < 1) {
    cardCvcError.classList.remove("hidden");
    hasCvcError = true;
  } else if (value.length > 3) {
    cardCvcError.innerHTML = "3 digit is max value";
    cardCvcError.classList.remove("hidden");
    hasCvcError = true;
  } else if (/[a-zA-Z]/.test(value)) {
    cardCvcError.innerHTML = "cannot contain alphabet";
    cardCvcError.classList.remove("hidden");
    hasCvcError = true;
  } else {
    cardCvcError.classList.add("remove");
    showCvcCard.innerHTML = value;
    hasCvcError = false;
  }

  checkSubmitButton();
};

const checkSubmitButton = () => {
  console.log(hasCardError);
  if (hasCardError || hasNameError || hasExpError || hasCvcError) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const complete = document.getElementById("complete"),
  formCard = document.getElementById("form");

const submitForm = (event) => {
  event.preventDefault();
  complete.classList.remove("hidden");
  formCard.classList.add("hidden");
};

const handleComplete = () => {
  complete.classList.add("hidden");
  formCard.classList.remove("hidden");
};

inputCard.addEventListener("input", cardNumber);
nameCard.addEventListener("input", cardName);
monthCard.addEventListener("input", cardExp);
yearCard.addEventListener("input", cardExp);
cvcCard.addEventListener("input", cardCvc);
submitButton.addEventListener("click", (event) => submitForm(event));
buttonComplete.addEventListener("click", handleComplete);
