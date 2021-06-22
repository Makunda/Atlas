package com.castsoftware.pythia.controllers;


import com.castsoftware.pythia.models.FrameworkEntity;
import com.castsoftware.pythia.repository.FrameworkRepository;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping("/frameworks")
public class FrameworkController {
	private final FrameworkRepository frameworksRepository;

	public FrameworkController(FrameworkRepository frameworkRepository) {
		this.frameworksRepository = frameworkRepository;
	}

	@PutMapping
	Mono<FrameworkEntity> createOrUpdateFramework(@RequestBody FrameworkEntity newFramework) {
		return this.frameworksRepository.save(newFramework);
	}

	@GetMapping("/by-name")
	Mono<FrameworkEntity> getFrameworkByTitle(@RequestBody String title) {
		return this.frameworksRepository.findOneByName(title);
	}

	@DeleteMapping("/\\{id\\}")
	Mono<Void> deleteFrameworkById(@PathVariable Long id) {
		return this.frameworksRepository.deleteById(id);
	}

	@GetMapping(value = {"", "/"}, produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	Flux<FrameworkEntity> getMovies() {
		return this.frameworksRepository.findAll();
	}
}
