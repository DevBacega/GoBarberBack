
# GoBarber - Backend
<p align = "center">
  <img style="width:150px; height:100px;" src="https://github.com/DevBacega/GoBarberWeb/blob/master/src/assets/gobarberlogo.png" />
</p>
<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-em-desenvolvimento">Em Desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/docs/home.html)


## 💻 Projeto

O Gobarber é um sistema de agendamento para barbearias e cabeleireiros, no qual o profissional pode cadastrar seu salão e receber pedidos de agendamento dos clientes cadastrados.


## :construction_worker: Em Desenvolvimento

- Este projeto está em faze de desenvolvimento.

Assim que o projeto estiver completo, postarei como executar ele.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
## Funcionalidades em Desenvolvimento (Obs: Uma RN deve sempre estar relacionada a um RF caso não, esta faltando uma  )
- [X] **Recuperação de Senha**
	 - Requisitos Funcionais (*funcionalidades do sistema.*)
		 - [X] O usuário deve poder recuperar sua senha informando o seu e-mail;
		 - [X] O usuário deve receber um e-mail com instruções de recuperação de senha
		 - [X] O usuário deve poder resetar sua senha;
	 - Requisitos não Funcionais(*tecnologias a serem usadas*)
		 - [X] Utilizar *Mailtrap* para testar envios em ambiente de dev;
		 - [X] Utilizar o *Amazon SES* para envios em produção;
		 - [X] O envio de e-mails deve acontecer em segundo plano (background job);
	 - Regra de Negocio(*Regras a serem seguidas*)
		 - [X] O link enviado por e-mail para resetar senha, deve expirar em 2h;
		 - [X] O usuário precisa confirmar a nova senha ao resetar sua senha;
 - [ ] **Atualização do Perfil**
	 - Requisitos Funcionais (*funcionalidades do sistema.*)
		 - [X] O usuário deve poder atualizar o seu nome, email, senha;
	 - Requisitos não Funcionais(*tecnologias a serem usadas*)
			NA
	 - Regra de Negocio(*Regras a serem seguidas*)
		 - [X] O usuário não pode alterar seu email para um e-mail já utilizado;
		 - [X] Para atualizar sua senha, o usuário deve informar a senha antiga;
		 - [X] Para atualizar sua senha, o usuário deve confirmar sua nova senha;
 - [ ] **Painel do prestador**
	  - Requisitos Funcionais (*funcionalidades do sistema.*)
		 - [ ] O usuário deve poder listar seus agendamentos de um dia especifico;
		 - [ ] O prestador deve receber uma notificação sempre que houver um novo agendamento;
		 - [ ] O prestador deve poder visualizar as notificações não lidas;
	  - Requisitos não Funcionais(*tecnologias a serem usadas*)
		 - [ ] Os agendamentos dos prestadores no dia devem ser armazenados em cache;
		 - [ ] As notificações do prestador devem ser armazenadas no MongoDB;
		 - [ ] As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

	 - Regra de Negocio(*Regras a serem seguidas*)
		 - [ ] A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;
 - [ ] **Agendamento de serviços**
	  - Requisitos Funcionais (*funcionalidades do sistema.*)
		 - [ ] O usuário deve poder listar todos os prestadores de serviço cadastrados;
		 - [ ] O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
		 - [ ] O usuário deve poder listar horários disponíveis em um dia especifico de um prestador;
	 - Requisitos não Funcionais(*tecnologias a serem usadas*)
		 - [ ] A listagem de prestadores deve ser armazenada em cache;
	 - Regra de Negocio(*Regras a serem seguidas*)
		 - [X] Cada agendamento deve durar 1h exatamente;
		 - [ ] Os agendamentos devem estar disponíveis entre as 8h às 18h (Primeiro as 8h, último às 17h)
		 - [X] O usuário não pode agendar em um horário já ocupado.
		 - [ ] O usuário não pode agendar em um horário que já passou;
		 - [ ] O usuário não pode agendar serviços consigo mesmo;
