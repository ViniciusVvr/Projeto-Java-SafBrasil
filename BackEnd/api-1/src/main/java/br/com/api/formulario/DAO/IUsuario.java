package br.com.api.formulario.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.api.formulario.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer>{
	
}
