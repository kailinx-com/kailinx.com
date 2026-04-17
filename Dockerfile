FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY Kailin_Xing_Resume_SoftwareIntern.pdf /usr/share/nginx/html/

COPY data /usr/share/nginx/html/data

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
