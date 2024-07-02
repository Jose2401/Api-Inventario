package com.ipn.mx.Entidades;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

//import lombok.Data;
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
public class Categoria {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long idCategoria;

	@NonNull
	private String nombreCategoria;

	@NonNull
	private String descripcionCategoria;

	@NonNull
	private LocalDateTime fechaCreacion;
	
	/*
	 * 
	@OneToMany(mappedBy = "idCategoria", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Producto> productos;
	 */
	
}
