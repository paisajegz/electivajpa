/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.electiva.factura.electivajpa.factory;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author USUARIO
 */
public class EntityFactory {
    public static EntityManager getEntityManager(){
       return Persistence.createEntityManagerFactory( "my_persistence_unit" ).createEntityManager();
    }
}
