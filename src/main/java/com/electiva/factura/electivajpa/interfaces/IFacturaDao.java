/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.interfaces;


import com.electiva.factura.electivajpa.modelo.NewFactura;
import javax.ws.rs.core.Response;

/**
 *
 * @author USUARIO
 */
public interface IFacturaDao {
    public Response guardarFactura(NewFactura factura);
    public Response mostrarFactura();
    public Response eliminaFactura(int id);
    public Response mostrarFacturaById(int id);
    public Response mostrarProductosFacturas(int id);
}
