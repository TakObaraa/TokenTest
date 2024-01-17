# 概要: docker imageビルドを行うタスクランナー
include ${abspath ../../../makefiles/variables.mk}

# 入力値
VERSION ?=

# 固定値
ENVIRONMENT := develop
DOCKER_BASE_DIR := docker-tools
DOCKER_IMAGE_NAME := rl-app-manager-mock




# usage: make build VERSION={versionName}
build:
	docker build \
		-t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} \
		-f ${DOCKER_FILE_FULL_PATH} \
		${DOCKER_CONTEXT_PATH}
