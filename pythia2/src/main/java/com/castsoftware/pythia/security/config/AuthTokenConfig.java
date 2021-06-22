package com.castsoftware.pythia.security.config;

import com.castsoftware.pythia.services.UserEntityDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;

@Component("authTokenConfig")
public class AuthTokenConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

	@Autowired(required = true)
	private UserEntityDetailsService customUserDetailsService;

	@Override
	public void configure(HttpSecurity http) throws Exception {
		AuthTokenFilter customFilter = new AuthTokenFilter(customUserDetailsService);
		http.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);
	}

}