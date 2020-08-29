/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.controlador;

import com.electiva.factura.electivajpa.entidades.Cliente;
import com.electiva.factura.electivajpa.entidades.Factura;
import com.electiva.factura.electivajpa.entidades.Productos;
import com.electiva.factura.electivajpa.entidades.ProductosFacturas;
import com.electiva.factura.electivajpa.entidades.Vendedor;
import com.electiva.factura.electivajpa.interfaces.IFacturaDao;
import com.electiva.factura.electivajpa.modelo.Estados;
import com.electiva.factura.electivajpa.modelo.NewFactura;
import java.sql.Date;
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
public class ControladorFactura implements IFacturaDao {

    
    private EntityManagerFactory emfactory;
    private EntityManager entitymanager;
    public ControladorFactura(){
      emfactory = Persistence.createEntityManagerFactory( "persistencia_electiva" );
      entitymanager = emfactory.createEntityManager( );
    }
    
    @Override
    public Response guardarFactura(NewFactura factura) {
        Estados estados = new Estados();
        try {
            entitymanager.getTransaction().begin();
            Productos listaProductos[] = factura.getListaProductos();
            Factura newFactura = new Factura();
            newFactura.setFecha(Date.valueOf(factura.getFecha()));
            newFactura.setDescripcion(factura.getDescripcion());
            Cliente cliente = entitymanager.find(Cliente.class, Long.valueOf(factura.getIdCliente()));
            Vendedor venvedor = entitymanager.find(Vendedor.class, Long.valueOf(factura.getIdVendedor()));
            newFactura.setCliente(cliente);
            newFactura.setVendedor(venvedor);
            newFactura.setTotal(factura.getTotal());
            entitymanager.persist(newFactura);
            entitymanager.getTransaction().commit();
            if (guardarProductos(listaProductos, newFactura)) {
                estados.setTitulo("ok");
                estados.setMessage("se ha registrado sastifactoriamente");
            } else {
                estados.setTitulo("error");
                estados.setMessage("errror al guardar los procutos");
            }

        } catch (Exception e) {
            entitymanager.getTransaction().rollback();
            estados.setTitulo("error");
            estados.setMessage(e.getMessage());

        }finally{
            entitymanager.close( );
            emfactory.close( );
        }
        return Response.ok(estados).build();
    }

    public boolean guardarProductos(Productos lista[], Factura factura) {
        try {
            for (Productos productos : lista) {
                entitymanager.getTransaction().begin();
                Productos actual = entitymanager.find(Productos.class, productos.getId());
                int newCantidad = Integer.parseInt(actual.getCantidad()) - Integer.parseInt(productos.getCantidad());
                actual.setCantidad(String.valueOf(newCantidad));
                entitymanager.merge(actual);
                ProductosFacturas productFactura = new ProductosFacturas();
                productFactura.setCantidad(productos.getCantidad());
                productFactura.setPrecioActual(productos.getPrecio());
                productFactura.setFactura(factura);
                productFactura.setProducto(actual);
                entitymanager.persist(productFactura);
                entitymanager.getTransaction().commit();
            }
        }catch(Exception e){
            entitymanager.getTransaction().rollback();
            System.out.println(e.getMessage());
               return false;
        }finally{
            entitymanager.close( );
            emfactory.close( );
        }
        return true;
    }
    @Override
    public Response mostrarFactura() {
        List<Factura> listaFactura = null;
        try{
            entitymanager.getTransaction().begin();
            Query query= entitymanager.createNativeQuery("SELECT * FROM factura",Factura.class);
            listaFactura= query.getResultList();
            entitymanager.getTransaction().commit();
        }catch(Exception e){
            entitymanager.getTransaction().commit();
            listaFactura= new ArrayList();
        }finally{
            entitymanager.close( );
            emfactory.close( );
        }
        return Response.ok(listaFactura).build();
    }

    @Override
    public Response eliminaFactura(int id) {
        Estados respuesta = new Estados();
        try{
            entitymanager.getTransaction( ).begin( );
            Factura factura = entitymanager.find( Factura.class, Long.valueOf(id));
            Query query= entitymanager.createQuery("SELECT u FROM ProductosFacturas u WHERE u.factura.id= :id",ProductosFacturas.class);
            List<ProductosFacturas> listaProductos= query.setParameter("id", id).getResultList();
            for (ProductosFacturas listaProducto : listaProductos) {
                entitymanager.remove(listaProducto);
            }
            entitymanager.remove( factura );
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
    public Response mostrarFacturaById(int id) {
        Factura productosFacturas=null;
        try{
            entitymanager.getTransaction().begin();
            Query query= entitymanager.createQuery("SELECT u FROM Factura u WHERE u.id= :id",Factura.class);
            productosFacturas= (Factura) query.setParameter("id", id).getSingleResult();
            entitymanager.getTransaction().commit();
        }catch(Exception e){
            entitymanager.getTransaction().rollback();
            productosFacturas = new Factura();
        }finally{
            entitymanager.close( );
            emfactory.close( );
        }
        
        return Response.ok(productosFacturas).build(); 
    }

    @Override
    public Response mostrarProductosFacturas(int id) {
        List<ProductosFacturas> listaProductos=null;
        try{
            entitymanager.getTransaction().begin();
            Query query= entitymanager.createQuery("SELECT u FROM ProductosFacturas u WHERE u.factura.id= :id",ProductosFacturas.class);
            listaProductos= query.setParameter("id", id).getResultList();
            entitymanager.getTransaction().commit();
        }catch(Exception e){
            entitymanager.getTransaction().rollback();
            listaProductos= new ArrayList();
        }finally{
            entitymanager.close( );
            emfactory.close( );
        }
        
        return Response.ok(listaProductos).build(); 
    }
    
}
