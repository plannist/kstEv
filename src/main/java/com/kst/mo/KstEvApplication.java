package com.kst.mo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
@MapperScan(basePackages= {"com.kst.mo.mapper"})
public class KstEvApplication {

	public static void main(String[] args) {
		SpringApplication.run(KstEvApplication.class, args);
	}
	
	@Configuration
	@Order(SecurityProperties.BASIC_AUTH_ORDER)
	protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter{
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
//		@Autowired
//		MyAuthenticationProvider autenticationProvider;
//		@Autowired
//		LoginSuccessHandler loginSuccessHandler;
//		@Autowired
//		LogoutSuccessHandler logoutSuccessHandler;
//		@Autowired
//		LogoutHandler logoutHandler;
		
		@Override
		protected void configure(HttpSecurity http) throws Exception{
			http
			.httpBasic()
			.and()
			.authorizeRequests()
			.antMatchers("/**") // "/index.html", "/about.html", "contact.html")
			.permitAll()
			.and()
			.authorizeRequests()
			.antMatchers("/newContract")
			.permitAll()
			.and()
			
			.formLogin()
			.loginPage("/login")
			//.successHandler(loginSuccessHandler)
			.loginProcessingUrl("/loginProcess")
			.usernameParameter("id")
			.passwordParameter("pwd")
			//.defaultSuccessUrl("/")
			.and()
			.logout()
			//.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
			.logoutUrl("/logout")
			//.addLogoutHandler(logoutHandler)
			//.logoutSuccessHandler(logoutSuccessHandler)
			.and().csrf()
			.disable();
			//.anyRequest()
			//.authenticated();
		}
		
		@Override
		protected void configure(AuthenticationManagerBuilder builder) throws Exception {
			//db 사용 로그인 시 호출
			//흐름 .formLogin().loginProsessing() url 요청 -> builder.authenticationProvider(autenticationProvider)
			//-> MyAuthenticationProvider -> UserDetailsServiceImpl -> 
			//builder.authenticationProvider(autenticationProvider);
			
			
			/*//inmemory 사용 로그인 시 주석 해제*/
			builder.inMemoryAuthentication()//.passwordEncoder(encoder)
			.withUser("user").roles("USER").password("{noop}1234").and()
			.withUser("admin").roles("ADMIN").password("{noop}1234");
			
		}
		
		@Bean
		public BCryptPasswordEncoder bycriptPasswordEncoder() {
			return new BCryptPasswordEncoder();
		}
		
	}

}
