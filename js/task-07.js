const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.oninput = () => {
  const fontSize = fontSizeControl.value;
  text.style.fontSize = `${fontSize}px`;
};
