fetch(url.facturas()).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)
    containerFactura(data)
});           



var controllerMenu = {
    actual: document.getElementById("container-facturas"),
    antiguo: null,
    cambiarMenu(item) {
        switch (item.getAttribute("data-link")) {
            case "container-facturas":
                fetch(url.facturas()).then(function (response) {
                    return response.json()
                }).then(function (data) {
                    console.log(data)
                    containerFactura(data)
                });           
                
                break;
            case "container-crear-factura":
                containerCrearFactura()
                break;
            case "container-clientes":
                console.log("hecho")
                fetch(url.clientes()).then(function (response) {
                    return response.json()
                }).then(function (data) {
                    console.log(data)
                    containerCliente(data)
                });                
                break;
            case "container-crear-clientes":
                containerCrearCliente()
                break;
        }
    }
} 