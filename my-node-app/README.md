## 🚀 How to access the workdir from container

```bash
$ docker build -t my-node-app .
$ docker run -d my-node-app
$ docker exec -it <container_id> /bin/bash
$ ls
```