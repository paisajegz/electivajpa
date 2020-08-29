const containerCrearCliente=function(){
    document.getElementById("content").innerHTML=template.crearCliente
}


function agregarCliente(){
    limpiarCliente();
   cliente.primerNombre=document.getElementById("txt-cliente-prinombre").value
   cliente.segundoNombre=document.getElementById("txt-cliente-segnombre").value
   cliente.primerApellido=document.getElementById("txt-cliente-priapellido").value
   cliente.segundoApeliido=document.getElementById("txt-cliente-segapellido").value
   cliente.correo=document.getElementById("txt-cliente-correo").value
   cliente.telefono=document.getElementById("txt-cliente-telefono").value
   cliente.documento=document.getElementById("txt-cliente-doc").value
   cliente.tipoDocumento=document.getElementById("txt-cliente-tipodoc").value
   console.log(cliente)
   fetch(url.clientes(),{
       method:"POST",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
   }).then(function(response){
    return response.json()
   }).then(function(data){
       if(data.titulo=="ok"){
        Swal.fire(
            data.titulo,
            data.message,
            'success'
          )
       }else{
        Swal.fire({
            icon: 'error',
            title: data.titulo,
            text: data.message,
          })
       }
   })
}

function limpiarCliente(){
    cliente.primerNombre=""
    cliente.segundoNombre=""
    cliente.primerApellido=""
    cliente.segundoApellido=""
    cliente.correo=""
    cliente.telefono=""
    cliente.documento=""
    cliente.tipoDocumento=""
}