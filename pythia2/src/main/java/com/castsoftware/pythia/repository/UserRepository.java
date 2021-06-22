package com.castsoftware.pythia.repository;

import com.castsoftware.pythia.models.UserEntity;
import org.springframework.data.neo4j.repository.ReactiveNeo4jRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface UserRepository extends ReactiveNeo4jRepository<UserEntity, Long> {
	Mono<UserEntity> findOneByEmail(String email);

	Mono<UserEntity> findOneByToken(String token);

	Mono<UserEntity> findById(Long id);
}
