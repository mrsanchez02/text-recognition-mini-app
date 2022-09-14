const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");
const pauseButton = document.getElementById("pause-button");
const textInput = document.getElementById("text");
const speedInput = document.getElementById("speed");
const langSelection = document.getElementById("lang-selection");

playButton.addEventListener("click", () => playText(textInput.value));

pauseButton.addEventListener("click", pausetext);

stopButton.addEventListener("click", StopText);

function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }

  const utterancce = new SpeechSynthesisUtterance(text);
  utterancce.lang = langSelection.value;
  utterancce.rate = speedInput.value || 1;

  utterancce.addEventListener("end", () => {
    textInput.disabled = false;
  });

  textInput.disabled = true;
  speechSynthesis.speak(utterancce);
}

function pausetext() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

function StopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
