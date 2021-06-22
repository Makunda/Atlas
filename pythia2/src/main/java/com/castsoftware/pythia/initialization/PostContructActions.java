package com.castsoftware.pythia.initialization;

import com.castsoftware.pythia.models.CategoryEntity;
import com.castsoftware.pythia.models.UserEntity;
import com.castsoftware.pythia.repository.CategoryRepository;
import com.castsoftware.pythia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import java.util.logging.Level;
import java.util.logging.Logger;

@Component
public class PostContructActions {

	private static final Logger LOG
			= Logger.getLogger(PostContructActions.class.getName());

	@Autowired
	private Environment environment;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CategoryRepository categoryRepository;

	@PostConstruct
	public void init() {
		LOG.info("Initializing the Admin user");
		try {
			LOG.info("Looking for administrator of the database");
			Mono<UserEntity> userEntityMono = userRepository.findOneByEmail("admin@castsoftware.com");
			UserEntity user = userEntityMono.block();

			CategoryEntity ct = new CategoryEntity("Test", "blblblb");
			categoryRepository.save(ct);

			// Create a new user
			if (user == null) {
				UserEntity admin = new UserEntity("admin@castsoftware.com", "adminadmin");
				userRepository.save(admin);
				LOG.info("Admin user was created.");
			} else {
				LOG.info("Admin user already exists.");
			}

		} catch (Exception err) {
			LOG.log(Level.SEVERE, "Failed to create the Administrator.", err);
		}
	}
}