let display = document.getElementById("display");
let screenValue = '';
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            display.value = screenValue;
        }

        else if (buttonText == "C") {
            screenValue = "";
            display.value = screenValue;
        }
        else if (buttonText == "=") {
            display.value = eval(screenValue)
        }
        else if (buttonText == "←") {
            display.value = screenValue.substring(0,screenValue.length -1);            
        }

        else {
            screenValue += buttonText;
            display.value = screenValue;
        }



    })
}