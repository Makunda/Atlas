package com.castsoftware.pythia.security.authentication;

import com.castsoftware.pythia.models.UserEntity;
import com.castsoftware.pythia.repository.UserRepository;
import reactor.core.publisher.Mono;

import java.util.Optional;

public class UserAuthenticationService {

	private final UserRepository userRepository;

	public UserAuthenticationService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	/**
	 * Logs in with the given {@code email} and {@code password}.
	 *
	 * @param email    Email of the user
	 * @param password Password associated to the User
	 * @return an {@link Optional} of a user when login succeeds
	 */
	public String login(String email, String password) {
		// Find user
		Mono<UserEntity> user = userRepository.findOneByEmail(email);
		UserEntity en = user.block();

		// Generate token
		if (en == null) {
			throw new RuntimeException("invalid login and/or password");
		}

		boolean verified = en.verifyPassword(password);
		if (!verified) {
			throw new RuntimeException("invalid login and/or password");
		}

		return TokenUtil.createToken(en);
	}

	/**
	 * Finds a user by its dao-key.
	 *
	 * @param token user dao key
	 * @return
	 */
	public Optional<UserEntity> findByToken(String token) {
		Mono<UserEntity> userEn = userRepository.findOneByToken(token);
		UserEntity user = userEn.block();
		return Optional.ofNullable(user);
	}

	/**
	 * Logs out the given input {@code user}.
	 *
	 * @param user the user to logout
	 */
	public void logout(UserEntity user) {
		user.setToken("");
	}
}

