package com.ipn.mx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;




//@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
@SpringBootApplication
public class InventarioApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventarioApplication.class, args);
	}

	/*
	 @Bean
	CommandLineRunner runner(CategoriaRepository categoriaRepository){
		return args -> {

			List<Categoria> categorias = Arrays.asList(
					new Categoria("Electronicos", "asd",LocalDateTime.now()),
					new Categoria("Linea Blanca", "asdaf", LocalDateTime.now())
				);
				categoriaRepository.saveAll(categorias);	
				
		};
	} 
	 */
		

}
