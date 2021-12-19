**Dillinger** is very easy to install and deploy in a Docker container.

*By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.*

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```