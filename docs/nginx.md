# Nginx Configuration

Setting up your reverse proxy correct is an important part in getting Boldr to work for you. The following are the recommended reverse proxy settings. Understand that this is not a full Nginx configuration.

### BoldrCMS
These settings are for the CMS and its server. Nginx will serve the assets and forward the API requests to Express.

```nginx
upstream boldrcms {
  ## your server's IP or the docker container works as well.
  server 127.0.0.1:3000;
}
server {
    location / {
      try_files $uri @proxy;
    }
    location @proxy {
      proxy_pass http://boldrcms;
      proxy_redirect off;
      proxy_cache_key               sfs$request_uri$scheme;
      proxy_set_header              X-Real-IP $remote_addr;
      proxy_set_header              X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header              X-Forwarded-Proto $scheme;
      proxy_set_header              Host $http_host;
      proxy_set_header              X-NginX-Proxy true;
      expires                       10m;
    }
    location ~ ^/(assets/|sitemap\.xml|robots\.txt|favicon\.ico)$ {
      root YOUR_FILE_STRUCTURE/public;
      ## root /var/www/<yoursitename>/public;
      access_log off;
      log_not_found off;
      expires max;
    }
  }
  ```
