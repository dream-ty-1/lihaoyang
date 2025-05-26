#!/bin/bash

# 设置变量
DOCKER_IMAGE="智能文件助手"
DOCKER_TAG="latest"
CONTAINER_NAME="file-assistant"

# 构建 Docker 镜像
echo "构建 Docker 镜像..."
docker build -t $DOCKER_IMAGE:$DOCKER_TAG .

# 停止并删除旧容器
echo "停止旧容器..."
docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

# 运行新容器
echo "启动新容器..."
docker run -d \
  --name $CONTAINER_NAME \
  -p 80:80 \
  --restart unless-stopped \
  $DOCKER_IMAGE:$DOCKER_TAG

echo "部署完成！" 