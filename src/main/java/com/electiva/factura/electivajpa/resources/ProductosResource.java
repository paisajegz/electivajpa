/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.resources;

import com.electiva.factura.electivajpa.controlador.ControladorCliente;
import com.electiva.factura.electivajpa.controlador.ControladorProductos;
import com.electiva.factura.electivajpa.interfaces.IClienteDao;
import com.electiva.factura.electivajpa.interfaces.IProductoDao;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author USUARIO
 */
@Path("productos")
@RequestScoped
public class ProductosResource {

    /**
     * Creates a new instance of ProductosResource
     */
    
    IProductoDao controller = new ControladorProductos();
    
    public ProductosResource() {
    }

    /**
     * Retrieves representation of an instance of com.electiva.factura.proyectoelectiva.ProductosResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProductos() {
        //TODO return proper representation object
        return controller.mostrarProductos();
    }

    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProductosById(@PathParam("id") int id) {
        //TODO return proper representation object
        return controller.mostrarProductoId(id);
    }
}
