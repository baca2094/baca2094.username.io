let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/jobless_reincarnation.jpg") {
    miImage.setAttribute("src", "images/shield_hero.png");
  } else {
    miImage.setAttribute("src", "images/jobless_reincarnation.jpg");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Bienvenido Otaku " + miNombre;
  }
}

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Bienvenido Otaku " + nombreAlmacenado;
}

miBoton.onclick = function () {
  estableceNombreUsuario();
};
