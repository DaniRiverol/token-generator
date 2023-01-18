const displayToken = document.querySelector("#token"),
  progress = document.querySelector("progress"),
  btnCopiar = document.querySelector("button");

let random = Math.floor(Math.random() * 100000000);
displayToken.value = random;
let intervalo = 100;
progress.value = 100;

const intervaloToken = setInterval(() => {
  if (intervalo == 0) {
    clearInterval(intervaloToken);
    intervalo = 100;
    location.reload();
  }
  intervalo -= 10;
  progress.value = intervalo;
}, 1000);

const copyToClipboard = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject("La API Clipboard no está disponible en su navegador.");
};

btnCopiar.addEventListener("click", () => {
  copyToClipboard(displayToken.value);
  Toastify({
    text: `Token ${displayToken.value} copiado exitosamente!`,
    duration: 2000,
   // close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "transparent",
      fontSize: "1.2rem"
    },
    offset:{
        y:"110px"
    }
  }).showToast();
});
