package com.kailinx.api.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class InternalTokenInterceptor implements HandlerInterceptor {

  private final String privateToken;

  public InternalTokenInterceptor(@Value("${events.private-token}") String privateToken) {
    this.privateToken = privateToken;
  }

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    String path = request.getRequestURI();
    if ("/v1/events".equals(path) && "POST".equalsIgnoreCase(request.getMethod())) {
      return true;
    }

    if (path.startsWith("/v1/events")) {
      String token = request.getHeader("x-internal-token");
      if (token == null || !token.equals(privateToken)) {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
        return false;
      }
    }

    return true;
  }
}
