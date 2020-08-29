

const containerCrearFactura=function(){
    document.getElementById("content").innerHTML=template.crearFactura
}



function buscarProducto(input){
    if(event.keyCode == 13){
        fetch(url.productosById(input.value)).then(function(response){
            return response.json();
        }).then(function(data){
           producto = data;
           console.log(producto)
           const existe=factura.listaProductos.filter(function(prod){
            return producto.id==prod.id
           })
           if(existe.length==0){    
                document.getElementById("span-codigo").innerHTML=data.id;
                document.getElementById("span-nombre").innerHTML=data.nombre;
                document.getElementById("span-precio").innerHTML=data.precio;
                document.getElementById("span-cantidad").innerHTML=data.cantidad;
                document.getElementById("btn-agregar-pro-fac").removeAttribute("disabled");
           }else{
                
                Swal.fire({
                    icon: 'error',
                    title: 'producto guardado en lista',
                    text: 'el producto ya existe en la factura',
                })
                document.getElementById("btn-agregar-pro-fac").setAttribute("disabled",true);
           }
        });
    }
};

function limipiarProducto(){
    
    document.getElementById("span-codigo").innerHTML="";
    document.getElementById("span-nombre").innerHTML="";
    document.getElementById("span-precio").innerHTML="";
    document.getElementById("span-cantidad").innerHTML="";
}

function agregarproductoFactura(){
    if(producto!=null){
        
            var maxCant = producto.cantidad
            producto.cantidad=1
            producto.max=maxCant
            factura.listaProductos.push(producto)
            imprimirProductosFactura()
            producto ={}
            limipiarProducto()
            Swal.fire(
                'Producto agregado!',
                'El producto a sido agregado exitosamente!',
                'success'
              )
        }else{
            Swal.fire({
                icon: 'error',
                title: 'no haz seleccionado producto',
                text: 'seleccion un producto',
              })
        }
    }





function imprimirProductosFactura(){
    const productos =factura.listaProductos;
    document.getElementById("contenido-factura").innerHTML=''
    productos.forEach((element,index) => {
        document.getElementById("contenido-factura").innerHTML+= `
        <tr>
            <td>${element.id}</td>
            <td>${element.nombre}</td>
            <td><input type="number" class="mx-3 my-2" value="${element.cantidad}" min="1" max="${element.max}" onchange="actualizarCantidad(this,${index})"></td>
            <td>$ ${element.precio}</td>
            <td>$ ${(parseInt(element.precio)*parseInt(element.cantidad))}</td>
        </tr>`       
    });
    calcularTotal()
    document.getElementById("total-factura").innerHTML=factura.total
}


function calcularTotal(){
    var total=0;
    const productos =factura.listaProductos;
    productos.forEach((element,index)=>{
        total+=(parseInt(element.precio)*parseInt(element.cantidad))
    })

    factura.total=total.toString()
}


function buscarCliente(etiqueta){
    if(event.keyCode === 13){
        fetch(url.clienteByDoc(etiqueta.value)).then(function(response){
            return response.json()
        }).then(function(data){
            cliente=data;
            document.getElementById("span-nombre").innerHTML=cliente.primerNombre + " " +cliente.segundoNombre
            document.getElementById("span-apellido").innerHTML=cliente.primerApellido + " " +cliente.segundoApeliido
            document.getElementById("span-telefono").innerHTML=(cliente.telefono != undefined) ? cliente.telefono : "no tiene"
            document.getElementById("span-correo").innerHTML=(cliente.correo != undefined) ? cliente.correo : "no tiene"
            document.getElementById("span-tipodoc").innerHTML=cliente.tipoDocumento
            document.getElementById("span-doc").innerHTML=cliente.documento
        })       
    }
}



function hacerpago(){
    var f = new Date();
    factura.fecha=f.getFullYear() +"-" + (((f.getMonth() +1)<10)?"0"+(f.getMonth()+1):(f.getMonth()+1)) +"-" +f.getDate();
    factura.descripcion = (document.getElementById("factura-descripcion").value != "")?document.getElementById("factura-descripcion").value:"no tiene"
    if(factura.listaProductos.length < 5){
        Swal.fire({
            icon: 'error',
            title: 'faltan producto',
            text: 'minimo 5 productos para crear factura',
          })
        return
    }
    if(cliente.id == undefined){   
        Swal.fire({
            icon: 'error',
            title: 'no haz seleccionado cliente',
            text: 'por favor elige el clietne para continuar',
          })
        return
    }   
    factura.idCliente=cliente.id
    factura.idVendedor=1
    console.log(JSON.stringify(factura))
    fetch(url.facturas(),
    {
        method:"POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body:JSON.stringify(factura)
    }).then(function(response){
        return response.json();
    }).then(function(data){
        if(data.titulo==="ok"){
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
    });
}



function actualizarCantidad(item,id){
    factura.listaProductos[id].cantidad=item.value 
    imprimirProductosFactura();
}