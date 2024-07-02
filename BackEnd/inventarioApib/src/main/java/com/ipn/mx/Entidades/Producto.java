package com.ipn.mx.Entidades;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@RequiredArgsConstructor
@NoArgsConstructor
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idProducto;

    @NonNull
    private String nombreProducto;

    @NonNull
    private String descripcionProducto;
    
    private Long existenciaProducto;

    private double precioProducto;

    @NonNull
    private LocalDateTime fechaCreacion;

    /*
     * 
     @ManyToOne
     */
    private Long idCategoria;
}
