/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.resources;

import com.electiva.factura.electivajpa.controlador.ControladorCliente;
import com.electiva.factura.electivajpa.entidades.Cliente;
import com.electiva.factura.electivajpa.interfaces.IClienteDao;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
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
@Path("cliente")
@RequestScoped
public class ClienteResource {

    @Context
    private UriInfo context;

       IClienteDao controller = new ControladorCliente();
    
  public ClienteResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getClientes() {
        return controller.mostrarClientes();
    }

    @GET 
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getClienteById(@PathParam("id") String id){
        return controller.MostrarClienteId(id);
    }
     
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response setCliente(Cliente cliente) {
        return controller.GuardarCliente(cliente);
    }
    
    
    
    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteCliente(@PathParam("id") int id){
        return  controller.eliminarCliente(id);
    }
}
