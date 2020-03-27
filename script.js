window.onload = () => {
  const panels = document.querySelectorAll(".panel");

  //window.onload = my_code();

  function toggleOpen() {
    console.log("Hello");
    this.classList.toggle("open");
  }

  function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("open-active");
    }
  }

  panels.forEach(panel => panel.addEventListener("click", toggleOpen));
  panels.forEach(panel =>
    panel.addEventListener("transitionend", toggleActive)
  );
};
