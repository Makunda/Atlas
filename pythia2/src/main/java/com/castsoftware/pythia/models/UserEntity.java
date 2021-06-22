package com.castsoftware.pythia.models;

import com.castsoftware.pythia.utils.PasswordGenerator;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;
import org.springframework.data.neo4j.core.schema.Relationship;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.nio.charset.StandardCharsets;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Node("PythiaUser")
public class UserEntity implements UserDetails {

	@Id
	private Long id;

	@Property
	private final String email;
	@Property
	private String hashPassword;
	@Property
	private String salt;
	@Property
	private String token;



	public UserEntity(String email, String password) {
		this.email = email;
		this.saveNewPassword(password);
	}

	/**
	 * Get the email
	 *
	 * @return
	 */
	public String getEmail() {
		return this.email;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	/**
	 * Get the Password
	 *
	 * @return
	 */
	public String getPassword() {
		return this.hashPassword;
	}

	@Override
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	/**
	 * Verify the validity of a password
	 *
	 * @param password
	 */
	public boolean verifyPassword(String password) {
		char[] passwordByte = password.toCharArray();
		byte[] saltByte = this.salt.getBytes();
		byte[] hash = this.hashPassword.getBytes();

		return PasswordGenerator.isExpectedPassword(passwordByte, saltByte, hash);
	}

	/**
	 * Reset the password of the user
	 *
	 * @return The new password
	 */
	public String resetPassword() {
		String newPassword = PasswordGenerator.generateRandomPassword(10);
		this.saveNewPassword(newPassword);
		return newPassword;
	}

	/**
	 * Save the password of an user
	 *
	 * @param password Password to be saved
	 */
	public void saveNewPassword(String password) {
		byte[] saltByte = PasswordGenerator.getNextSalt();
		char[] passwordByte = password.toCharArray();
		byte[] hash = PasswordGenerator.hash(passwordByte, saltByte);

		this.salt = new String(saltByte, StandardCharsets.UTF_8);
		this.hashPassword = new String(hash, StandardCharsets.UTF_8);
	}

	/**
	 * Set user Token
	 *
	 * @param token
	 */
	public void setToken(String token) {
		this.token = token;
	}
}
