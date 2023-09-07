package com.example.pidi.security.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
@Component
@RequiredArgsConstructor //lombok, implements getters/setters for any final variable inside the class
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService; //already exists as interface, we want our own implementation (we want our own bean of the implementation ), created in "Application Config"

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization"); //this header contains the Jwt-token
        final String jwt; //checking the jwt-token
        final String userEmail; //needed later to validate the user with the token
        if (authHeader == null || !authHeader.startsWith("Bearer ")) { //early return
            filterChain.doFilter(request, response);
            return;
        }
        jwt = authHeader.substring(7);// because it's the first char after bearer header
        userEmail = jwtService.extractUsername(jwt); // Todo extract userEmail from JWT token, we need a class that can manipulate the token, the JwtService
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
            if (jwtService.isTokenValid(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        } // after this filter we need the filterchain to execute the next filter
        filterChain.doFilter(request, response);
        // no we have to do the binding, so the filters are used, new class in config package (Security Configuration)
    }

}
