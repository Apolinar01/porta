eventListener()
  function eventListener(){
    const formulario =document.querySelector('#formulario');
    formulario.addEventListener('submit',validar)
    
}
function validar(e){
    e.preventDefault();
    let nombre =document.getElementById('nombre').value;
 
    if (nombre=='') {
      swal.fire('No puede dejar campos vacios')
    }

  }