FROM nginx:alpine

# Copy static assets
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY Kailin_Xing_Resume_SoftwareIntern.pdf /usr/share/nginx/html/

# Copy data directory
COPY data /usr/share/nginx/html/data

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
