/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.entidades;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 *
 * @author USUARIO
 */
@Entity
@Table(name="productosfacturas")
public class ProductosFacturas implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="idproductosFacturas")
    private Long id;

    
    
    @NotNull 
    @ManyToOne(optional=false)
    @JoinColumn(name="Factura_idFactura", referencedColumnName = "idFactura")
    private Factura factura;
    
    @NotNull
    @ManyToOne(optional=false)
    @JoinColumn(name="Productos_idProductos", referencedColumnName = "idProductos")
    private Productos producto;
    
    @NotNull
    @Column(name="precioActual")
    private String precioActual;
    
    @NotNull
    @Column(name="cantidad")
    private String cantidad;
    
     
    @Column(name="estado")
    private String estado;
    
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

    public Productos getProducto() {
        return producto;
    }

    public void setProducto(Productos producto) {
        this.producto = producto;
    }

    public String getPrecioActual() {
        return precioActual;
    }

    public void setPrecioActual(String precioActual) {
        this.precioActual = precioActual;
    }

    public String getCantidad() {
        return cantidad;
    }

    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
    
    

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ProductosFacturas)) {
            return false;
        }
        ProductosFacturas other = (ProductosFacturas) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.electiva.factura.mavenjpa.entidades.ProductosFacturas[ id=" + id + " ]";
    }
    
}
