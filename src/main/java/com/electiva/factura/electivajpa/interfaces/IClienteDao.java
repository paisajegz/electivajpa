/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.interfaces;

import com.electiva.factura.electivajpa.entidades.Cliente;
import javax.ws.rs.core.Response;

/**
 *
 * @author USUARIO
 */
public interface IClienteDao {
    public Response GuardarCliente(Cliente cliente);
    public Response mostrarClientes();
    public Response MostrarClienteId(String id);
    public Response eliminarCliente(int id);
    public Cliente getCliente(int id);
}
