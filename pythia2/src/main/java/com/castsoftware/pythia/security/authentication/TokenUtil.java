package com.castsoftware.pythia.security.authentication;

import com.castsoftware.pythia.models.UserEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.codec.Hex;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Logger;

public class TokenUtil {

	private static final Logger LOG
			= Logger.getLogger(TokenUtil.class.getName());

	public static final String MAGIC_KEY = "Pythia";

	public static String createToken(UserEntity userDetails) {
		long expires = System.currentTimeMillis() + 1000L * 60 * 60;
		return userDetails.getEmail() + ":" + expires + ":" + computeSignature(userDetails, expires);
	}

	/**
	 * Create the signature based on the User
	 * Token : UserName:Timestamp:Password:Hash
	 * @param userDetails The user
	 * @param expires Expiration timestamp of the token
	 * @return The token based on the username
	 */
	public static String computeSignature(UserEntity userDetails, long expires) {

		MessageDigest digest;
		try {
			digest = MessageDigest.getInstance("MD5");
		} catch (NoSuchAlgorithmException e) {
			throw new IllegalStateException("No MD5 algorithm available!");
		}
		String signatureBuilder = userDetails.getEmail() + ":" +
				expires + ":" +
				userDetails.getPassword() + ":" +
				TokenUtil.MAGIC_KEY;
		return new String(Hex.encode(digest.digest(signatureBuilder.getBytes())));
	}

	/**
	 * Retrieve the Username from the Token
	 * @param authToken
	 * @return
	 */
	public static String getEmailFromToken(String authToken) {
		if (authToken == null) {
			return null;
		}
		String[] parts = authToken.split(":");
		return parts[0];
	}

	/**
	 * Check the validity of the token
	 * @param authToken To be validated token
	 * @param userDetails Name of the user requesting the validation
	 * @return True if the token is valid and legitimate, false otherwise
	 */
	public static boolean validateToken(String authToken, UserEntity userDetails) {
		try {
			String[] parts = authToken.split(":");
			long expires = Long.parseLong(parts[1]);
			String signature = parts[2];
			String signatureToMatch = computeSignature(userDetails, expires);
			return expires >= System.currentTimeMillis() && signature.equals(signatureToMatch);
		} catch (Exception ignored) {
			// The badly formatted token generated an exception
			return false;
		}
	}
}