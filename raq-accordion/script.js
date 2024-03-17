const acc = document.getElementsByClassName("q");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    console.log(this);
    // this.classList.toggle("active");
    // const ans = this.nextElementSibling;
  });
}
