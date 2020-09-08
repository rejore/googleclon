let voice_active = document.getElementById("voice__active");
let resultData = "";
let menu = document.getElementById("menu");
let menu_admin = document.getElementById("menu__admin");
let inputGoogle = document.getElementById("inputGoogle");
let recognition = new webkitSpeechRecognition();
recognition.continuos = true;
recognition.interimResults = true;
recognition.lang = "es";

let webSpeech = () => {
  if (verifyClassVoiceColor(voice_active.className.split(" "))) {
    voice_active.classList.remove("voice_color");
    recognition.stop();
  } else {
    voice_active.classList.add("voice_color");
    recognition.start();
  }
};

let verifyClassVoiceColor = listClass => {
  return listClass.some(clase => clase == "voice_color");
};

let menuIcons = () => {
  menu_admin.classList.toggle("hide");
};

voice_active.addEventListener("click", webSpeech);
menu.addEventListener("click", menuIcons);
/*recognition.onaudiostart = () =>
  console.log("Iniciando servicio de reconocimiento");
recognition.onsoundstart = () => console.log("Detectando cualquier sonido");
recognition.onspeechstart = () => console.log("Detectando sonidos de una voz");*/
recognition.onresult = event => {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      resultData = event.results[i][0].transcript;
    }
  }
  inputGoogle.value = resultData;
};
