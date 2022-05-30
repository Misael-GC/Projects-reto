let secondsSpan = document.querySelector("#seconds"); //escriba en el html
let minutesSpan = document.querySelector("#minutes");
const timerButton = document.querySelector("#timer-button");
const hero = document.querySelector("#principal");
let secondsValue = 0;
let minutesValue = 0;
let currentInterval;
let currentButton;


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


function formatValue(value){
    return ('0' + value).slice(-2);// el slice nos va ayudar a que el se escriba un cero y desaparezca a como avance ejemplo: 01 -02---10
}// nos va ahorrar este problema

function stopChronometer() {
    if (currentButton) {
      currentButton.disabled = false;
    }
    clearInterval(currentChronometer);
  }
  
  function resetChronometer() {
    secondsValue = 0;
    minutesValue = 0;
    secondsSpan.textContent = "00";
    minutesSpan.textContent = "00";
  }
  

//---------------------------------------------------------------
function executeChronometer() {
    hero.innerHTML = `
    <h1 class=hero--title>Chronometer</h1>
    <div class="hero--time">
      <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
    </div>
    <div class="hero--buttons">
      <button onclick="startChronometer()" class="button hero--button" type="button">Start</button>
      <button onclick="stopChronometer()" class="button hero--button" type="button">Stop</button>
      <button onclick="resetChronometer()" class="button hero--button" type="button">Reset</button>
    </div>
    `;
    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
  }
  
  function executeTimer() {
    hero.innerHTML = `
      <h1 class=hero--title>Timer</h1>
      <div class="hero--time">
        <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
      </div>
      <div class="hero--buttons">
          <form onsubmit="startTimer()" >
            <input type="number" placeholder="Escribe los minutos" id="minutesInput" name="minutes" > 
            <input type="number" placeholder="Escribe los segundos" id="secondsInput" name="seconds" > 
            <button type="submit">Start</button>
          </form>
      </div>
    `;
    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
  }
  
  function executePomodoro() {
    hero.innerHTML = `
      <h1 class=hero--title>Pomodoro</h1>
      <div class="hero--time">
        <p id="time"><span id="minutes">25</span>:<span id="seconds">00</span></p>
      </div>
      <div class="hero--buttons">
        <button type="button" onclick="startPomodoro()" >start</button>
      </div>
    `;
  
    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
  }
  
  function startPomodoro() {
    secondsValue = 0;
    minutesValue = 1;
  
    currentInterval = setInterval(() => {
      secondsValue -= 1;
      if (secondsValue === -1) {
        secondsValue = 59;
        minutesValue -= 1;
      }
      if (minutesValue === 0 && secondsValue === 0) {
        const container = document.querySelector(".hero--time");
        const title = document.createElement("h2");
        title.textContent = "El pomodoro a terminado";
        document.title = "Se terminó el pomodoro";
        container.appendChild(title);
        clearInterval(currentInterval);
        alert("Se acabo el pomodoro, (inserte sonido aqui)");
      }
      minutesSpan.textContent = formatValue(minutesValue);
      secondsSpan.textContent = formatValue(secondsValue);
    }, 1000);
  }
  
  function startTimer() {
    event.preventDefault();//como es submit le decimos que no haga la funcion de enviar porque no nos sirve
    const minutes = parseInt(event.target.minutes.value); //para escribir los minutos que queremos que inicie a contar los minutos
    const seconds = parseInt(event.target.seconds.value); //para escribir los minutos que queremos que inicie a contar los segundos
  
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
    secondsValue = seconds;
    minutesValue = minutes;
  
    currentInterval = setInterval(() => {
      secondsValue -= 1;
      if (secondsValue === -1) {
        secondsValue = 59;
        minutesValue -= 1;
      }
      if (minutesValue === 0 && secondsValue === 0) {
        const container = document.querySelector(".hero--time");
        const title = document.createElement("h2");
        title.textContent = "El timer a terminado";
        container.appendChild(title);
        clearInterval(currentInterval);
      }
      minutesSpan.textContent = formatValue(minutesValue);
      secondsSpan.textContent = formatValue(secondsValue);
    }, 1000);
  }