var facturas =[];
const containerFactura=function(data){
    console.log(data)
    document.getElementById("content").innerHTML=template.factura
    document.getElementById("table-factura").innerHTML="";
    facturas=data
    data.forEach(function(element,index){
        document.getElementById("table-factura").innerHTML+=`
        <tr>
            <td scope="row">${element.id}</td>
            <td>${element.descripcion}</td>
            <td>${element.fecha}</td>
            <td>${element.total}</td>
            <td><button class="btn  btn-success" onclick="verMasFactura('${element.id}',${index})"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger" onclick="eliminarFactura(${element.id})"><i class="fa fa-trash"></i></button></td>
        </tr>`;
    }); 
}



function verMasFactura(id,index){
    fetch(url.facturaContenido(id)).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
        $(".modal-factura").modal("show")
        document.getElementById("modal-cliente-nombre").innerHTML=`${facturas[index].cliente.primerNombre}  ${facturas[index].cliente.segundoNombre}`
        document.getElementById("modal-cliente-apellido").innerHTML=`${facturas[index].cliente.primerApellido} ${facturas[index].cliente.segundoApeliido}`
        document.getElementById("modal-cliente-telefono").innerHTML=facturas[index].cliente.telefono
        document.getElementById("modal-cliente-correo").innerHTML=facturas[index].cliente.correo
        document.getElementById("modal-cliente-documento").innerHTML=facturas[index].cliente.documento
        document.getElementById("modal-cliente-tipodoc").innerHTML=facturas[index].cliente.tipoDocumento
        document.getElementById("modal-vendedor-nombre").innerHTML=`${facturas[index].vendedor.primerNombre} ${facturas[index].vendedor.segundoNombre}`
        document.getElementById("modal-vendedor-apellido").innerHTML = `${facturas[index].vendedor.primerApellido} ${facturas[index].vendedor.segundoApellido}`
        document.getElementById("modal-product").innerHTML=""
        data.forEach(function(element,index){
            document.getElementById("modal-product").innerHTML+=`
            <tr>
                <td>${element.producto.id}</td>
                <td>${element.producto.nombre}</td>
                <td>${element.producto.precio}</td>
                <td>${element.producto.cantidad}</td>
            </tr>
            `
        })
    });
}

function eliminarFactura(id){
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
            
            fetch(url.facturasId(id),
            {
                method:"DELETE", 
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            }).then(function(response){
                return response.json()
            }).then(function(data){
                if(data.titulo=="ok"){
                    Swal.fire(
                        data.titulo,
                        data.message,
                        'success'
                      )    
                    fetch(url.facturas()).then(function (response) {
                        return response.json()
                    }).then(function (data) {
                        console.log(data)
                        containerFactura(data)
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