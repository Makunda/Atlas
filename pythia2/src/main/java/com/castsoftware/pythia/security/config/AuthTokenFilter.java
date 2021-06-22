package com.castsoftware.pythia.security.config;

import com.castsoftware.pythia.models.UserEntity;
import com.castsoftware.pythia.repository.UserRepository;
import com.castsoftware.pythia.security.authentication.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;


/**
 * Filter authenticated queries and validate tokens
 */
public class AuthTokenFilter extends GenericFilterBean {

	@Autowired(required = true)
	private final UserDetailsService customUserDetailsService;

	@Autowired
	private UserRepository userRepository;
	// Type of the token in header
	private final String authTokenHeaderName = "x-auth-token";

	public AuthTokenFilter(UserDetailsService userDetailsService) {
		this.customUserDetailsService = userDetailsService;
	}

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
			throws IOException, ServletException {
		try {
			HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
			String authToken = httpServletRequest.getHeader(authTokenHeaderName);

			if (StringUtils.hasText(authToken)) {
				String email = TokenUtil.getEmailFromToken(authToken);

				UserEntity userDetails = userRepository.findOneByEmail(email).block();

				if (userDetails != null && TokenUtil.validateToken(authToken, userDetails)) {
					UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(userDetails,
							userDetails.getPassword());
					SecurityContextHolder.getContext().setAuthentication(token);
				}
			}

			filterChain.doFilter(servletRequest, servletResponse);
		} catch (Exception ex) {
			throw new RuntimeException(ex);
		}
	}
}