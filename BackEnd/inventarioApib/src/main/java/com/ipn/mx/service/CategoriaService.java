package com.ipn.mx.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.ipn.mx.Entidades.Categoria;
import com.ipn.mx.repository.CategoriaRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class CategoriaService {
    
    private final CategoriaRepository categoriaRepository;

    public Iterable<Categoria> findAll(){
        return categoriaRepository.findAll();
    }

    public Categoria findById(Long id) {
        return categoriaRepository.findById(id).orElse(null);
    }

    public Categoria create(Categoria categoria) {
        categoria.setFechaCreacion(LocalDateTime.now());
        return categoriaRepository.save(categoria);
    }

    public Categoria update( Long id,Categoria form) {
        
        Categoria categoriafromDb = findById(id);
        categoriafromDb.setNombreCategoria(form.getNombreCategoria());
        categoriafromDb.setDescripcionCategoria(form.getDescripcionCategoria());

        return categoriaRepository.save(categoriafromDb);
    }

    public void delete(Long id) {
        
        Categoria categoriafromDb = findById(id);
        categoriaRepository.delete(categoriafromDb);
    }
}
