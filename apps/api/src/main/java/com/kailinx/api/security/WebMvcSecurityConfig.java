package com.kailinx.api.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcSecurityConfig implements WebMvcConfigurer {

  private final InternalTokenInterceptor internalTokenInterceptor;

  public WebMvcSecurityConfig(InternalTokenInterceptor internalTokenInterceptor) {
    this.internalTokenInterceptor = internalTokenInterceptor;
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(internalTokenInterceptor)
      .addPathPatterns("/v1/events/**");
  }
}
