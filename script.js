const control = document.getElementById("control");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");
control.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  //save information to local storage
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}
function saveValues(name, value) {
  localStorage[name] = value;
}

function recoverValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((property) => {
    handleStyle[property](localStorage[property]);
    control.elements[property].value = localStorage[property];
  });
  showCss();
}

recoverValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
  console.log(btn.style.cssText.split("; ").join(";</span><span>"));
}
