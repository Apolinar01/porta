eventListener();
function eventListener() {
  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", validar);
}
function validar(e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (nombre == "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes de llenar el campo nombre",
    });
  } else if (email == "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes de llenar el campo email",
    });
  } else if (subject == "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes de llenar el campo asunto",
    });
  } else if (message == "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes de llenar el campo mensaje",
    });
  } 
}
