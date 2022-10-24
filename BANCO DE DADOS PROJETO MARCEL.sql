CREATE table saf_cadastro_beneficiado(
id_morador INT PRIMARY KEY  AUTO_INCREMENT,
cpf_morador VARCHAR(11) NOT NULL,
nome_morador VARCHAR(50) NOT NULL,
data_nascimento_morador DATE NOT NULL,
email_morador VARCHAR(50),
telefone_morador VARCHAR(12) NOT NULL,
renda_morador VARCHAR(10) NOT NULL
);

CREATE TABLE saf_cadastro_dependente(
id_dependente INT PRIMARY KEY AUTO_INCREMENT,
nome_dependente VARCHAR(50) NOT NULL,
data_nascimento_dependente DATE NOT NULL,
comprovante_matricula_escolar INT NOT NULL,
id_responsavel INT NOT NULL,
CONSTRAINT fk_responsavel FOREIGN KEY (id_responsavel) REFERENCES saf_cadastro_beneficiado (id_morador)
);

CREATE TABLE saf_cadastro_enderecos(
id_endereco INT PRIMARY KEY AUTO_INCREMENT,
cep_endereco VARCHAR(7) NOT NULL,
estado_endereco VARCHAR(2),
cidade_endereco VARCHAR(30),
rua_endereco VARCHAR(30),
bairro_endereco Varchar(30),
numero int,
complemento VARCHAR(30)
);




