package com.ipn.mx.controller;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.ipn.mx.Entidades.Categoria;
import com.ipn.mx.service.CategoriaService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin
@AllArgsConstructor
@RequestMapping("api/categorias")
@RestController
public class CategoriaController {
    
    private final CategoriaService categoriaService ;

    @GetMapping
    public Iterable<Categoria> list(){
        return categoriaService.findAll();
    }

    @GetMapping("{id}")
    public Categoria get(@PathVariable Long id) {
        return categoriaService.findById(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Categoria create(@RequestBody Categoria categoria) {
        return categoriaService.create(categoria);
    }
    
    @PutMapping("{id}")
    public Categoria update(@PathVariable Long id, @RequestBody Categoria form) {
        return categoriaService.update(id, form);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
       categoriaService.delete(id);
    }
    
}
