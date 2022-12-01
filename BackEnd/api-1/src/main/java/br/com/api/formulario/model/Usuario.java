package br.com.api.formulario.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "saf_cadastro_beneficiado")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_morador")
	private Integer id;
	@Column(name = "nome_morador", length = 50, nullable = true)
	private String nome;
	@Column(name = "cpf_morador", length = 11, nullable = true)
	private String cpf;
	@Column(name = "email_morador", length = 50, nullable = true)
	private String email;
	@Column(name = "telefone_morador", length = 12, nullable = true)
	private String telefone;
	@Column(name = "data_nascimento_morador", nullable = true)
	private String dataNascimento;
	@Column(name = "renda_morador", length = 10, nullable = true)
	private String renda;
	@Column(name = "dependentes_morador", length = 2, nullable = true)
	private String dependentes;
	@Column(name = "cep_endereco", length = 8, nullable = true)
	private String cep;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getRenda() {
		return renda;
	}
	public void setRenda(String renda) {
		this.renda = renda;
	}
	public String getDependentes() {
		return dependentes;
	}
	public void setDependentes(String dependentes) {
		this.dependentes = dependentes;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	
	
}
