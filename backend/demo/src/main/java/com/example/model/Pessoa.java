package com.example.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Pessoa {

    @ApiModelProperty(value = "Identificador da pessoa")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ApiModelProperty(value = "Nome da pessoa")
    @NonNull
    private String nome;

    @ApiModelProperty(value = "Sexo da pessoa (M ou F)")
    private String sexo;

    @ApiModelProperty(value = "Email da pessoa")
    @Email(regexp=".*@.*\\..*", message = "Email nao esta valido")
    private String email;

    @ApiModelProperty(value = "Data de nascimento da pessoa")
    @Column(name="data_nascimento")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dataNascimento;

    @ApiModelProperty(value = "Cidade de naturalidade da pessoa")
    private String naturalidade;

    @ApiModelProperty(value = "Nacionalidade da pessoa")
    private String nacionalidade;

    @ApiModelProperty(value = "CPF da pessoa (Unico)")
    @CPF(message = "O CPF nao esta valido")
    private String cpf;

    @ApiModelProperty(value = "Data de criacao do cadastro da pessoa")
    @CreationTimestamp
    private LocalDateTime dataCriacao;

    @ApiModelProperty(value = "Data de alteracao do cadastro da pessoa")
    @UpdateTimestamp
    private LocalDateTime dataAtualizacao;

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

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getNaturalidade() {
        return naturalidade;
    }

    public void setNaturalidade(String naturalidade) {
        this.naturalidade = naturalidade;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDateTime dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public LocalDateTime getDataAtualizacao() {
        return dataAtualizacao;
    }

    public void setDataAtualizacao(LocalDateTime dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }
}
