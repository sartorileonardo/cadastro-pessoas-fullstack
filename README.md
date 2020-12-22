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
* docker compose up

## Backend Endpoints
* GET ALL: /pessoas
* GET BY ID: /pessoas/{id}
* GET BY NAME: /pessoas/fundByName/{nome}
* POST: /pessoas
* PUT: /pessoas/{id}
* DELETE: /pessoas/{id}
* DELETE ALL: /pessoas/deleteAll

* SOURCE: /source

## Documentacao Swagger disponivel em:
http://localhost:8888/swagger-ui.html


# cadastro-pessoas-fullstack
