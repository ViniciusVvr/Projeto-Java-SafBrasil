package br.com.api.formulario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.formulario.DAO.IUsuario;
import br.com.api.formulario.model.Usuario;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuario")
public class FormularioController {
	
	@Autowired
	private IUsuario dao;
	
	@GetMapping
	public List<Usuario>  listaUsuario(){
		return (List<Usuario>) dao.findAll(); 
	}
	
	@PostMapping
	public Usuario criarUsuario(@RequestBody Usuario usuario) {
		Usuario novoUsuario = dao.save(usuario);
		return novoUsuario;
	}
}
