


------------------------------------------
------------------------------------------
-- Banco de bados do Porjeto do Marcel  --
------------------------------------------
------------------------------------------


-- Criando o banco --

CREATE DATABASE saf_brasil;
------------------------------------------

-- Usando o banco --

use saf_brasil;
------------------------------------------

-- Criando a tabela --

CREATE TABLE saf_cadastro_beneficiado(
id_morador INT PRIMARY KEY  AUTO_INCREMENT UNIQUE,
nome_morador VARCHAR(50) NOT NULL,
cpf_morador VARCHAR(11) NOT NULL UNIQUE,
email_morador VARCHAR(50) NOT NULL,
telefone_morador VARCHAR(12) NOT NULL,
data_nascimento_morador DATE NOT NULL,
renda_morador VARCHAR(10) NOT NULL,
dependentes_morador VARCHAR(2) NOT NULL,
cep_endereco VARCHAR(8) NOT NULL,
);

------------------------------------------

-- Exemplo de insert --

insert into saf_cadastro_beneficiado (nome_morador,cpf_morador,email_morador,telefone_morador,data_nascimento_morador,
renda_morador,dependentes_morador,cep_endereco)
values 
("rafaelzinho","65555555555","rafa@uol.bom","551545454545","2005-08-21","10000","02","06785000");

------------------------------------------


-- Banco gerado de acordo com o front feito pelo Henrique e JP.

-- Banco feito nos moldes do MySql Workbench
