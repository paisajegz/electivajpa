/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.resources;

import com.electiva.factura.electivajpa.controlador.ControladorFactura;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import com.electiva.factura.electivajpa.entidades.Factura;
import com.electiva.factura.electivajpa.interfaces.IFacturaDao;
import com.electiva.factura.electivajpa.modelo.NewFactura;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author USUARIO
 */
@Path("facturas")
@RequestScoped
public class FacturasResource {

    @Context
    private UriInfo context;

    IFacturaDao controller = new ControladorFactura();
    /**
     * Creates a new instance of FacturasResource
     */
   
       public FacturasResource() {
    }
    /**
     * Retrieves representation of an instance of com.electiva.factura.proyectoelectiva.FacturasResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response mostrarFacturas() {
        return controller.mostrarFactura();
    }
    
    
    @GET
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response mostrarById(@PathParam("id") int id){
        return controller.mostrarFacturaById(id);
    }
    
    
    @GET
    @Path("contenido/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response mostrarContenido(@PathParam("id") int id){
        return controller.mostrarProductosFacturas(id);
    }
    
    

    

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response guardarFactura(NewFactura factura){
        return controller.guardarFactura(factura);
    }
    
    /**
     * PUT method for updating or creating an instance of FacturasResource
     * @param content representation for the resource
     */
    @DELETE
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response putXml(@PathParam("id") int id){
        return controller.eliminaFactura(id);
    }
    
    
    
}
