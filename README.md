# cadastro-pessoas-fullstack

## Baixar
git clone https://github.com/sartorileonardo/cadastro-pessoa.git

## Executar somente backend (Java 8 + Spring Boot)
No diretório backend/demo rodar:
1. docker build -t api .
2. docker run -p 8888:8888 api

## Executar somente frontend (Angular)
No diretório frontend/demo rodar:
1. docker build -t client . 
2. docker run -p 4200:4200 client

## Executar sistema completo (fullstack)
No diretório raiz do projeto, rodar:
* docker-compose up

## Backend Endpoints
* GET ALL: /pessoas
* GET BY ID: /pessoas/{id}
* GET BY NAME: /pessoas/fundByName/{nome}
* POST: /pessoas
* PUT: /pessoas/{id}
* DELETE: /pessoas/{id}
* DELETE ALL: /pessoas/deleteAll

* SOURCE: /source

## Testes
Executar a classe PessoaControllerTest no modo teste da IDE.
![Testes](https://user-images.githubusercontent.com/7613528/102938629-6fb1d380-448b-11eb-869c-5bdf16f3ab02.png)

## Documentacao Swagger disponivel em:
http://localhost:8888/swagger-ui.html
![DocumentacaoSwagger](https://user-images.githubusercontent.com/7613528/102938861-df27c300-448b-11eb-8aaa-e37545903514.png)

## Demo Image
![DemoCadastroPessoas](https://user-images.githubusercontent.com/7613528/105109392-3a54d180-5a9b-11eb-8396-f289c049c0f0.png)

