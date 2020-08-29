/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.controlador;

import com.electiva.factura.electivajpa.entidades.Cliente;
import com.electiva.factura.electivajpa.entidades.Productos;
import com.electiva.factura.electivajpa.interfaces.IProductoDao;
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
public class ControladorProductos implements IProductoDao{

    
    private EntityManagerFactory emfactory;
    private EntityManager entitymanager;
 
    public ControladorProductos(){
      emfactory = Persistence.createEntityManagerFactory( "persistencia_electiva" );
      entitymanager = emfactory.createEntityManager( );
    }
    
    @Override
    public Response mostrarProductoId(int id) {
        Query query= entitymanager.createQuery("SELECT u FROM Productos u WHERE u.id= :id",Productos.class);
        Productos cliente= (Productos) query.setParameter("id", id).getSingleResult();
        return Response.ok(cliente).build();
    }

    @Override
    public Response mostrarProductos() {
        Query query= entitymanager.createNativeQuery("SELECT * FROM productos",Productos.class);
        List<Productos> listaProductos= query.getResultList();
        return Response.ok(listaProductos).build();
    }

    @Override
    public Productos mostrarProductoId() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
