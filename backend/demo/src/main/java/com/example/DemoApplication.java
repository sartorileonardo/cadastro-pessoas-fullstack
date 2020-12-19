package com.example;

import com.example.model.Pessoa;
import com.example.repository.PessoaRepository;
import com.example.utils.Utils;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.LongStream;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner init(PessoaRepository repository) {
		return args -> {
			repository.deleteAll();
			LongStream.range(1, 11)
					.mapToObj(i -> {
						Pessoa p = new Pessoa();
						String name = Utils.getNameGenerated();

						p.setNome(name);
						p.setEmail(name.toLowerCase().replace(" ", "_") + "@gmail.com");
						p.setSexo("M");
						p.setDataNascimento(Date.valueOf(LocalDate.now()));
						p.setNaturalidade("Florianopolis");
						p.setNacionalidade("Brasileiro");
						try {
							p.setCpf(Utils.geraCPF());
						} catch (Exception e) {
							e.printStackTrace();
						}
						return p;
					})
					.map(v -> repository.save(v))
					.forEach(System.out::println);
		};
	}
}
