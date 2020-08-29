/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.modelo;

import com.electiva.factura.electivajpa.entidades.Productos;

/**
 *
 * @author USUARIO
 */
public class NewFactura {
        
    private int id;
    private String descripcion;
    private int idCliente;
    private int idVendedor;
    private String fecha;
   private Productos listaProductos [];
    private String total;

    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public int getIdVendedor() {
        return idVendedor;
    }

    public void setIdVendedor(int idVendedor) {
        this.idVendedor = idVendedor;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public Productos[] getListaProductos() {
        return listaProductos;
    }

    public void setListaProductos(Productos[] listaProductos) {
        this.listaProductos = listaProductos;
    }

    

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }
    
}
