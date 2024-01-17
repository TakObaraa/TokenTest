ARG IMAGE_NAME=rl-app-manager-mock
ARG ENVIRONMENT=develop

ARG RESOURCE_DIR=docker-tools/${ENVIRONMENT}/${IMAGE_NAME}
ARG SRC_CONFIG_DIR_PATH=${RESOURCE_DIR}/config
ARG DST_CONFIG_DIR_PATH=/etc/nginx

# build stage
FROM node:19.6.0-alpine as builder
WORKDIR /usr/src

# NOTE: ビルドに必要なファイルをコピー（コピーされない場合は.dockerignoreを確認）
COPY ./ /usr/src/

RUN npm install --ignore-scripts
RUN npm run build


FROM nginx:1.25.1-alpine-slim
ARG SRC_CONFIG_DIR_PATH
ARG DST_CONFIG_DIR_PATH

# NOTE: TimeZoneの設定は環境変数の指定と/etc/localtimeのシンボリックリンク上書き両方行うこと
#       （OSによってはTimeZoneの環境変数が反映されないため）
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
ENV TZ Asia/Tokyo
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja

COPY ${SRC_CONFIG_DIR_PATH}/nginx.conf ${DST_CONFIG_DIR_PATH}/nginx.conf
COPY ${SRC_CONFIG_DIR_PATH}/conf.d ${DST_CONFIG_DIR_PATH}/conf.d
COPY --from=builder /usr/src/dist ./usr/share/nginx/html
