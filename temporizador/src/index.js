const secondsSpan = document.querySelector("#seconds"); //escriba en el html
const minutesSpan = document.querySelector("#minutes");
let secondsValue = 0;
let minutesValue= 0;
let currentChronometer;
let currentButton;

function formatValue(value){
    return ('0' + value).slice(-2);// el slice nos va ayudar a que el se escriba un cero y desaparezca a como avance ejemplo: 01 -02---10
}// nos va ahorrar este problema

function startChronometer (){
    currentButton = event.target; // esto ayuda a que el evento se reinicie y asi no se vaya más rapido el conometro cada vez que se de 1 click es decir que reinicie el evento
    currentButton.disabled = true;//desactiva el boton y ya no le puedes dar click
    currentChronometer = setInterval(() => {
        // console.log("have passed 1 second")
        secondsValue +=1
        if(secondsValue === 60){
            secondsValue = 0
            minutesValue  += 1
            minutesSpan.textContent =  formatValue(minutesValue);
        }
        secondsSpan.textContent = formatValue(secondsValue)// writ on the html con split solo tomara los ultimos 2 numeros
    }, 1000)
}


function stopChronometer(){
    if(currentChronometer){
        currentButton.disabled = false;
    }
    clearInterval(currentChronometer)
}   

function resetChronometer(){
    secondsValue = 0; //reinicia a cero
    minutesValue = 0;
    secondsSpan.textContent ="00";// html write se 00
    minutesSpan.textContent ="00";// html write se 00
}