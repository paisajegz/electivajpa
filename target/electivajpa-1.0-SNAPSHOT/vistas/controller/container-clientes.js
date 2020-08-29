const containerCliente=function(data){
    
    document.getElementById("content").innerHTML=template.cliente
    document.getElementById("cliente-container").innerHTML=""
    data.forEach(function(element,index){
        document.getElementById("cliente-container").innerHTML+=`<tr>
                        <td scope="row">${element.documento}</td>
                        <td>${element.primerNombre} ${element.segundoNombre}</td>
                        <td>${element.primerApellido} ${element.segundoApeliido}</td>
                        <td>${(element.telefono != undefined ) ? element.telefono : "no tiene" }</td>
                        <td>${(element.correo != undefined) ? element.correo : "no tiene" } </td>
                        <td>${element.tipoDocumento}</td>
                        <td><button class="btn  btn-danger" onclick="eliminarCliente('${element.id}')"><i class="fa fa-trash"></i></button></td>
                    </tr>`
    }) 
    
} 

function eliminarCliente(id,index){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
            
            fetch(url.clienteById(id),
            {
                method:"DELETE",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            }
            ).then(function(response){
                return response.json()
            }).then(function(data){
                    console.log(data)
                    
                    if(data.titulo=="ok"){
                        Swal.fire(
                            data.titulo,
                            data.message,
                            'success'
                          )
                                    
                            fetch(url.clientes()).then(function (response) {
                                return response.json()
                            }).then(function (data) {
                                containerCliente(data)
                            });
                        
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: data.titulo,
                            text: data.message,
                          })
                    }
                    
            })
        }
    })
}