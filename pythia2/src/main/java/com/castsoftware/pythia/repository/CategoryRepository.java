package com.castsoftware.pythia.repository;

import com.castsoftware.pythia.models.CategoryEntity;
import org.springframework.data.neo4j.repository.ReactiveNeo4jRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface CategoryRepository extends ReactiveNeo4jRepository<CategoryEntity, Long> {
	Mono<CategoryEntity> findById(Long id);

	Mono<CategoryEntity> findOneByName(String name);
}

