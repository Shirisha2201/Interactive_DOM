const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const bgButton = document.getElementById("bgBtn");
const textButton = document.getElementById("textBtn");
const displayBox = document.getElementById("displayBox");

function isValidColor(color){
    const s = new Option().style;
    s.color = color;
    return s.color!=="";
}
bgButton.addEventListener("click", () => {
    const userColor = colorInput.value.trim();

    if(!isValidColor(userColor)){
        alert("Invalid color name!");
        return;
    }
    displayBox.style.backgroundColor = userColor;
});
textButton.addEventListener("click", () => {
    const newText = textInput.value.trim();

    if(newText === ""){
        alert("Please enter some text!");
        return;
    }
    displayBox.textContent = newText;
});