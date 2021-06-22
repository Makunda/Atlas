package com.castsoftware.pythia.controllers;

import com.castsoftware.pythia.security.authentication.UserAuthenticationService;
import org.springframework.web.bind.annotation.*;
import reactor.util.annotation.NonNull;

@RestController
@RequestMapping("/login")
final class LoginController {
	@NonNull
	UserAuthenticationService authentication;

	@PostMapping
	String login(@RequestBody LoginUser user) {
		return authentication
				.login(user.email, user.password);
	}

	@GetMapping
	String getLogin() {
		return "AAAAAAAAAAAAAAAAAAAAAAAAA";
	}

	static class LoginUser {
		public String email;
		public String password;
	}
}
