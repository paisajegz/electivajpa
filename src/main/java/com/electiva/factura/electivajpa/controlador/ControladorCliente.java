/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.controlador;

import com.electiva.factura.electivajpa.entidades.Cliente;
import com.electiva.factura.electivajpa.interfaces.IClienteDao;
import com.electiva.factura.electivajpa.modelo.Estados;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.ws.rs.core.Response;

/**
 *
 * @author USUARIO
 */
public class ControladorCliente implements IClienteDao{
    private EntityManagerFactory emfactory;
    private EntityManager entitymanager;
    public ControladorCliente(){
      emfactory = Persistence.createEntityManagerFactory( "persistencia_electiva" );
      entitymanager = emfactory.createEntityManager( );
    }
    
    @Override
    public Response GuardarCliente(Cliente cliente) {
      Estados respuesta = new Estados();
        try{
            entitymanager.getTransaction( ).begin( );
            entitymanager.persist(cliente);
            entitymanager.getTransaction( ).commit( );
            respuesta.setTitulo("ok");
            respuesta.setMessage("el mensaje a sido enviado sastifactoriamente");
        }catch(Exception e){
            respuesta.setTitulo("error");
            respuesta.setMessage(e.getMessage());
        }finally{
            entitymanager.close( );
            emfactory.close( );
        }
      return Response.ok(respuesta).build();
    }

    @Override
    public Response mostrarClientes() {
        List<Cliente> listaClientes=null;
        try{
            entitymanager.getTransaction().begin();
            Query query= entitymanager.createNativeQuery("SELECT * FROM cliente",Cliente.class);
            listaClientes= query.getResultList();
            entitymanager.getTransaction().commit();
        }catch(Exception e){
            entitymanager.getTransaction().rollback();
            listaClientes=new ArrayList();
        }finally{
            entitymanager.close( );
            emfactory.close( );
        }
        
        return Response.ok(listaClientes).build();
    }

    @Override
    public Response MostrarClienteId(String id) {
        Cliente cliente=null;
        try{
            entitymanager.getTransaction().begin();
            Query query= entitymanager.createQuery("SELECT u FROM Cliente u WHERE u.documento= :id",Cliente.class);
            cliente= (Cliente) query.setParameter("id", id).getSingleResult();
            entitymanager.getTransaction().commit();
        }catch(Exception e){
            cliente=new Cliente();
            entitymanager.getTransaction().rollback();
        }finally{
            entitymanager.close( );
            emfactory.close( );
        }
        
        return Response.ok(cliente).build();
    }

    @Override
    public Response eliminarCliente(int id) {
        Estados respuesta = new Estados();
        try{
            entitymanager.getTransaction( ).begin( );
            Cliente cliente = entitymanager.find( Cliente.class, Long.valueOf( id));
            entitymanager.remove( cliente );
            entitymanager.getTransaction( ).commit( );
            respuesta.setTitulo("ok");
            respuesta.setMessage("el cliente a sido eliminado sastifactoriamente");
        }catch(Exception e){
            respuesta.setTitulo("error");
            respuesta.setMessage(e.getMessage());
            entitymanager.getTransaction().rollback();
        }finally{
            entitymanager.close( );
            emfactory.close( );

        }
 
        return Response.accepted(respuesta).build();
    }

    @Override
    public Cliente getCliente(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
