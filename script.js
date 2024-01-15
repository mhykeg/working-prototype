document.getElementById("greeting-text-input").onchange = function() {changeGreetingText()}
function changeGreetingText() {
    let greetingTextInput = document.getElementById("greeting-text-input");
    let newGreetingText = document.getElementById("greeting");
    newGreetingText.innerHTML = greetingTextInput.value;
    newGreetingText.setAttribute("contenteditable", "true");
    newGreetingText.style.visibility = "visible";
}

document.getElementById("signoff-input").onchange = function() {changeSignoff()}
function changeSignoff() {
    let signoffTextInput = document.getElementById("signoff-input");
    let signoffText = document.getElementById("signoff");
    signoffText.innerHTML = signoffTextInput.value;
    signoffText.setAttribute("contenteditable", "true");
    signoffText.style.visibility = "visible";
}

document.getElementById("font").onchange = function() {changeFont()}
function changeFont() {
    let fontChoice = document.getElementById("font");
    let newFontGreeting = document.getElementById("greeting");
    let newFontSignoff = document.getElementById("signoff")
    newFontGreeting.style.fontFamily = fontChoice.value;
    newFontSignoff.style.fontFamily = fontChoice.value;
}

document.getElementById("font-size").onchange = function() {changeFontSize()}
function changeFontSize() {
    let fontSizeChoice = document.getElementById("font-size");
    let newFontSizeGreeting = document.getElementById("greeting");
    let newFontSizeSignoff = document.getElementById("signoff");
    newFontSizeGreeting.style.fontSize = `${fontSizeChoice.value}px`;
    newFontSizeSignoff.style.fontSize = `${fontSizeChoice.value}px`;
}

document.getElementById("font-color").onchange = function() {changeFontColor()}
function changeFontColor() {
    let colorChoice = document.getElementById("font-color");
    let newFontColorGreeting = document.getElementById("greeting");
    let newFontColorSignoff = document.getElementById("signoff")
    newFontColorGreeting.style.color = colorChoice.value;
    newFontColorSignoff.style.color = colorChoice.value;
}

document.getElementById("color").onchange = function() {chooseColor()}
function chooseColor() {
    let colorChoice = document.getElementById("color").value;
    let newColor = document.getElementById("design");
    newColor.style.backgroundColor = colorChoice;
    newColor.style.backgroundImage = "none";
    document.getElementById("colornow").innerHTML = `The current color is ${newColor.style.backgroundColor}`
}

document.getElementsByTagName("rgb").onchange = function() {rgbColor()}
function rgbColor() {
    let redChoice = document.getElementById("red-input").value;
    let greenChoice = document.getElementById("green-input").value;
    let blueChoice = document.getElementById("blue-input").value;
    let rgbChoice = `rgb(${redChoice},${greenChoice}, ${blueChoice})`
    let newRGBColor = document.getElementById("design");
    newRGBColor.style.backgroundColor = rgbChoice;
    newRGBColor.style.backgroundImage = "none";
    document.getElementById("colornow").innerHTML = `The current color is ${newRGBColor.style.backgroundColor}`
}


document.getElementById("design-button").onclick = function() {randomDesign()}
function randomDesign() {
    let designArray = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png','7.png', '8.png', '9.png',];
    let randomDesign = Math.floor(Math.random()*9-1);
    let newDesign = document.getElementById("design");
    newDesign.style.backgroundColor = "rgba(255,255,255,0)";
    newDesign.style.backgroundImage = `url(${designArray[randomDesign]})`;
    newDesign.style.backgroundSize = "cover";
}

document.getElementById("design-choice").onclick = function() {chooseDesign()}
function chooseDesign() {
    let designArray = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png','7.png', '8.png', '9.png',];
    let designChoice = document.getElementById("design-choice").value - 1;
    let newDesign = document.getElementById("design");
    newDesign.style.backgroundColor = "rgba(255,255,255,0)";
    newDesign.style.backgroundImage = `url(${designArray[designChoice]})`;
    newDesign.style.backgroundSize = "cover";
}

document.getElementById("design-input").onchange = function() {displayDesign()}
function displayDesign() {
    let inputFile = document.getElementById("design-input");
    let imageLink = URL.createObjectURL(inputFile.files[0]);
    let newDesignBackground = document.getElementById("design");
    newDesignBackground.style.backgroundImage = `url(${imageLink})`;
    newDesign.style.backgroundSize = "cover";
}

document.getElementById("color-button").onclick = function() {randomColor()}
function randomColor() {
    let randomRed = Math.floor(Math.random()*255);
    let randomGreen = Math.floor(Math.random()*255);
    let randomBlue = Math.floor(Math.random()*255);
    let randomColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
    let newColor = document.getElementById("design");
    newColor.style.backgroundImage = "none";
    newColor.style.backgroundColor = randomColor;
    document.getElementById("colornow").innerHTML = `The current color is ${newColor.style.backgroundColor}`
}

document.getElementById("file-input").onchange = function() {displayImage()}
function displayImage() {
    let inputFile = document.getElementById("file-input");
    let imageLink = URL.createObjectURL(inputFile.files[0]);
    let clientImage = document.getElementById("clientimage");
    clientImage.style.backgroundImage = `url(${imageLink})`;
    clientImage.innerHTML = "";
    clientImage.style.border = "none";
    clientImage.style.visibility = "visible";
}


function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;;        
    }
}

// Signoff Functions (Drag)
let signoffElement = document.getElementById('signoff')
signoffElement.addEventListener("click", signoffDragFunction);
function signoffDragFunction() {
    let signoffElement = document.getElementById('signoff')
    dragElement(signoffElement);
}

// Greeting Functions (Drag)
let greetingElement = document.getElementById('greeting')
greetingElement.addEventListener("click", greetingDragFunction);
function greetingDragFunction() {
    let greetingElement = document.getElementById('greeting')
    dragElement(greetingElement);
}

// Client Image Function (Drag)
let clientImageElement = document.getElementById('clientimage')
clientImageElement.addEventListener("click", clientImageDragFunction);
function clientImageDragFunction() {
    let clientImageElement = document.getElementById('clientimage')
    dragElement(clientImageElement);
}

function nullButton(elmnt) {
    elmnt.style.visibility = "hidden";
}

// Greeting Null Button Click
let nullGreeting = document.getElementById("null-greeting-button")
nullGreeting.addEventListener("click", nullGreetingFunction)
function nullGreetingFunction() {
    let greetingText = document.getElementById("greeting");
    nullButton(greetingText);
}

// Greeting Signoff Button Click
let nullSignoff = document.getElementById("null-signoff-button")
nullSignoff.addEventListener("click", nullSignoffFunction)
function nullSignoffFunction() {
    let signoffText = document.getElementById("signoff");
    nullButton(signoffText);
}

// Background Design Null Button Click
let backgroundDesign = document.getElementById("null-design-button")
backgroundDesign.addEventListener("click", nullDesignFunction)
function nullDesignFunction() {
    let designBackground = document.getElementById("design");
    designBackground.style.backgroundColor = "rgba(255,255,255,0)";
    designBackground.style.backgroundImage = "none";
}

// Logo Null Button Click
let nullLogo = document.getElementById("null-logo-button")
nullLogo.addEventListener("click", nullLogoFunction)
function nullLogoFunction() {
    let clientImage = document.getElementById("clientimage");
    nullButton(clientImage);
}


//Export Button Click
document.getElementById("export-button").addEventListener("click", function() {
    let finalDesign = document.getElementById("design");
    finalDesign.style.border = "none";
    html2canvas(finalDesign).then(canvas => {
        // Get image data URL
        let imageDataURL = canvas.toDataURL("image/png");  // Adjust image format if needed
      
        // Create a link to download the image
        let link = document.createElement("a");
        link.download = "final-design.png";  // Set desired filename
        link.href = imageDataURL;
      
        // Trigger the download
        link.click();
      });
      finalDesign.style.border = "2px dotted goldenrod";
  });