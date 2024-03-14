const desencriptacion = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

const encriptacion = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const txtEncriptar = document.querySelector(".encriptar");
const respuesta = document.querySelector(".evaluar");
const btnCopiar = document.querySelector(".btn-copiar");

btnEncriptar.addEventListener("click", () => {
  let texto = txtEncriptar.value.toLowerCase();
  let textoEncriptado = texto
    .split("")
    .map(char => encriptacion[char] || char)
    .join("");
  respuesta.innerHTML = textoEncriptado;
  btnCopiar.style.visibility = "visible";
});

btnDesencriptar.addEventListener("click", () => {
  let texto = txtEncriptar.value.toLowerCase();
  let textoDesencriptado = texto
    .split(" ")
    .map(word => desencriptarPalabra(word))
    .join(" ");
  respuesta.innerHTML = textoDesencriptado;
  btnCopiar.style.visibility = "visible";
});

function desencriptarPalabra(palabra) {
  return palabra
    .split("")
    .map(char => desencriptacion[char] || char)
    .join("");
}

btnCopiar.addEventListener("click", () => {
  navigator.clipboard.writeText(respuesta.textContent);
});
