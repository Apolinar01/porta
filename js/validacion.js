eventListener()
  function eventListener(){
    const formulario =document.querySelector('#formulario');
    formulario.addEventListener('submit',validar)
    
}
  function validar(e){
    e.preventDefault();
    let nombre =document.getElementById('nombre').value;
    let nombre =document.getElementById('email').value;
    let nombre =document.getElementById('subject').value;
    if (nombre=='') {
      swal.fire('No puede dejar campos vacios')
    }else if(email==''){
      swal.fire('No puede dejar campos vacios')

    }else if(subject =''){
      swal.fire('No puede dejar campos vacios')
      
    }

  }