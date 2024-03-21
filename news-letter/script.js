let success = document.getElementById("success-section"),
  subscribe = document.getElementById("subscribe"),
  userEmail = document.getElementById("user_email");

const isValidEmail = () => {
  const inputValue = document.getElementById("email").value;
  const errorMessage = document.getElementById("email-error");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isMatch = emailRegex.test(inputValue);
  if (!isMatch) {
    errorMessage.style.display = "block";
  } else {
    success.style.display = "block";
    subscribe.style.display = "none";
    userEmail.innerHTML = inputValue;
  }
};

const handleDismiss = () => {
  success.style.display = "none";
  subscribe.style.display = "flex";
};
