package com.ipn.mx.repository;

import org.springframework.data.repository.CrudRepository;

import com.ipn.mx.Entidades.Producto;

public interface ProductoRepository 
	extends CrudRepository<Producto, Long>{
        Iterable<Producto> findByidCategoria(Long idCategoria);
}
