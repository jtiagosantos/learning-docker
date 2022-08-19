## 🚀 How to run (dev - no nodemon working)

```bash
$ docker build -t my-express-app -f Dockerfile.dev .
$ docker run -p 8080:3333 my-express-app
```

<br>

## 🚀 How to run (dev - nodemon working)

```bash
$ docker build -t my-express-app -f Dockerfile.dev .
$ docker run -p 8080:3333 -v $(pwd):/my-express-app my-express-app
```

<br>

## 🚀 How to deploy

- [documentation](https://east-veil-a47.notion.site/Deploy-na-Heroku-de-aplica-o-Node-js-Docker-467075c642114e55805d4eaf3f7fed6e)