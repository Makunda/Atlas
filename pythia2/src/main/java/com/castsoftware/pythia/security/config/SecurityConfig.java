package com.castsoftware.pythia.security.config;

import com.castsoftware.pythia.services.UserEntityDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.SecurityConfigurer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserEntityDetailsService customUserDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder authManagerBuilder) throws Exception {
		authManagerBuilder.userDetailsService(customUserDetailsService).passwordEncoder(bCryptPasswordEncoder());
	}

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		String[] methodSecured = {"/api/frameworks/*", "/swagger-ui.html"};

		http.csrf().disable()
				.authorizeRequests()
				.antMatchers("/api", "/api/login")
				.permitAll()
				.antMatchers(methodSecured).authenticated()
				.and()
				.formLogin()
				.loginPage("/login")
				.defaultSuccessUrl("/swagger-ui.html")
				.failureUrl("/login?error=true")
				.permitAll()
				.and().logout()
				.deleteCookies("JSESSIONID")
				.logoutUrl("/logout")
				.logoutSuccessUrl("/login");

		SecurityConfigurer securityConfigurerAdapter =
				new AuthTokenConfig();
		http.apply(securityConfigurerAdapter);
	}
}