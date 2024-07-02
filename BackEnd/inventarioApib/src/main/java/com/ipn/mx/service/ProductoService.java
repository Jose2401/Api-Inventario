package com.ipn.mx.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.ipn.mx.Entidades.Producto;
import com.ipn.mx.repository.ProductoRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ProductoService {
    
    private final ProductoRepository productoRepository;

    public Iterable<Producto> findAll(){
        return productoRepository.findAll();
    }

    public Producto findById(Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    public Producto create(Producto producto) {
        producto.setFechaCreacion(LocalDateTime.now());
        return productoRepository.save(producto);
    }

    public Producto update(Long id, Producto form) {
        Producto productoFromDb = findById(id);
        productoFromDb.setNombreProducto(form.getNombreProducto());
        productoFromDb.setDescripcionProducto(form.getDescripcionProducto());
        productoFromDb.setPrecioProducto(form.getPrecioProducto());
        productoFromDb.setExistenciaProducto(form.getExistenciaProducto());
        productoFromDb.setIdCategoria(form.getIdCategoria());

        return productoRepository.save(productoFromDb);
    }

    public void delete(Long id) {
        Producto productoFromDb = findById(id);
        productoRepository.delete(productoFromDb);
    }

    public Iterable<Producto> findProductosByCategoria(Long idCategoria) {
        return productoRepository.findByidCategoria(idCategoria);
    }
    
}
