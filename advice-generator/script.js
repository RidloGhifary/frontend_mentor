const shuffle = document.getElementById("shuffle-advice"),
  advice = document.getElementById("advice"),
  adviceId = document.getElementById("advice-id");

const MAIN_URL = "https://api.adviceslip.com/advice";

const fetchData = async () => {
  try {
    const response = await fetch(MAIN_URL);
    if (!response.ok) throw new Error("Network response was not ok.");

    const { slip } = await response.json();
    advice.innerHTML = slip.advice;
    adviceId.innerHTML = `# ${slip.id}`;
  } catch (error) {
    console.log("Error : ", error);
  }
};

shuffle.addEventListener("click", fetchData);
