var url={
    host:"http://localhost:8080/electivajpa/",
    ws()
    { 
        return this.host + "resources/"
    },
    facturas(){
        return this.ws() + "facturas"
    },
    facturaContenido(id){
        return this.facturas() + "/contenido/" + id
    },
    facturasDoc(doc){
        return this.facturas() + "/documento/"+doc
    },
    facturasId(id){
        return this.facturas() + "/" + id
    },
    facturasFecha(fechaIni,FechaFin){
        return this.facturas() + "/documento/"+fechaIni + "/" + FechaFin
    },
    facturasCodigo(codigo){
        return this.facturas() + "/codigo/"+codigo
    },
    productos(){
        return this.ws() + "productos" 
    },
    productosById(id){
        return this.productos() +"/" + id
    },clientes(){
        return this.ws() + "cliente"
    },clienteByDoc(doc){
        return this.clientes() + "/" + doc
    },clienteById(id){
        return this.clientes()  + "/" + id
    }
}