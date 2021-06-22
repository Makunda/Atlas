package com.castsoftware.pythia;

import org.neo4j.driver.Driver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.neo4j.core.ReactiveDatabaseSelectionProvider;
import org.springframework.data.neo4j.core.transaction.ReactiveNeo4jTransactionManager;
import org.springframework.data.neo4j.repository.config.ReactiveNeo4jRepositoryConfigurationExtension;
import org.springframework.transaction.ReactiveTransactionManager;

@SpringBootApplication
public class PythiaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PythiaApplication.class, args);
	}

	@Bean(ReactiveNeo4jRepositoryConfigurationExtension.DEFAULT_TRANSACTION_MANAGER_BEAN_NAME)
	public ReactiveTransactionManager reactiveTransactionManager(Driver driver,
																 ReactiveDatabaseSelectionProvider databaseNameProvider) {
		return new ReactiveNeo4jTransactionManager(driver, databaseNameProvider);
	}
}
