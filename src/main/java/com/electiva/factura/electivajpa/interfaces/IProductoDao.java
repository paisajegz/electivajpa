/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.interfaces;

import com.electiva.factura.electivajpa.entidades.Productos;
import javax.ws.rs.core.Response;

/**
 *
 * @author USUARIO
 */
public interface IProductoDao {
    public Response mostrarProductoId(int id);
    public Response mostrarProductos();
    public Productos mostrarProductoId();
}
