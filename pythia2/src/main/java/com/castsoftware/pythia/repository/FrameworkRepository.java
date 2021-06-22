package com.castsoftware.pythia.repository;

import com.castsoftware.pythia.models.FrameworkEntity;
import org.springframework.data.neo4j.repository.ReactiveNeo4jRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface FrameworkRepository extends ReactiveNeo4jRepository<FrameworkEntity, Long> {
	Mono<FrameworkEntity> findOneByName(String name);

	Mono<FrameworkEntity> findById(Long id);

	Mono<Void> deleteById(Long id);
}
