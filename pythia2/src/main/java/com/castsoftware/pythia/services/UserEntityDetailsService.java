package com.castsoftware.pythia.services;

import com.castsoftware.pythia.models.UserEntity;
import com.castsoftware.pythia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
public class UserEntityDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) {
		Mono<UserEntity> user = userRepository.findOneByEmail(username);
		UserEntity userEntity = user.block();
		if (userEntity == null) {
			throw new UsernameNotFoundException(username);
		}
		return userEntity;
	}
}
