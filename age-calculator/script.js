const dayInput = document.querySelector('input[name="day"]'),
  monthInput = document.querySelector('input[name="month"]'),
  yearInput = document.querySelector('input[name="year"]'),
  submitDate = document.getElementById("submitAge");

submitDate.addEventListener("click", () => {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const dayErrorMsg = document.getElementById("day-error-msg");
  const monthErrorMsg = document.getElementById("month-error-msg");
  const yearErrorMsg = document.getElementById("year-error-msg");
  const invalidDate = document.getElementById("invalid-date");

  isNaN(day)
    ? dayErrorMsg.classList.remove("hidden")
    : dayErrorMsg.classList.add("hidden");

  isNaN(month)
    ? monthErrorMsg.classList.remove("hidden")
    : monthErrorMsg.classList.add("hidden");

  if (isNaN(year)) {
    yearErrorMsg.classList.remove("hidden");
    console.log("Year field is required");
    return;
  } else if (year.toString().length < 4) {
    yearErrorMsg.classList.remove("hidden");
    yearErrorMsg.innerHTML = "Should be valid year";
    return;
  } else {
    yearErrorMsg.classList.add("hidden");
  }

  if (day < 1 || day > 31 || month < 1 || month > 12 || year > 2024) {
    invalidDate.classList.remove("hidden");
  }

  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  let ageInYears, monthsRemaining, daysRemaining;

  if (currentDate < birthDate) {
    invalidDate.classList.remove("hidden");
    invalidDate.innerHTML = "Cannot calculate the future";
    dayInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
    return;
  } else {
    ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
    monthsRemaining = currentDate.getMonth() - birthDate.getMonth();
    daysRemaining = currentDate.getDate() - birthDate.getDate();
    if (daysRemaining < 0) {
      monthsRemaining--;
      const lastMonthDays = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      daysRemaining += lastMonthDays;
    }
    if (monthsRemaining < 0) {
      ageInYears--;
      monthsRemaining += 12;
    }

    document.getElementById("year-result").textContent = ageInYears;
    document.getElementById("month-result").textContent = monthsRemaining;
    document.getElementById("day-result").textContent = daysRemaining;
  }
});
