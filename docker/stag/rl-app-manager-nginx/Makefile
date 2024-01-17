# 概要: docker imageビルドを行うタスクランナー
include ${abspath ../../../makefiles/variables.mk}

# 入力値
VERSION ?=

# 固定値
ENVIRONMENT := stag
DOCKER_BASE_DIR := docker
DOCKER_IMAGE_NAME := rl-app-manager-nginx




# usage: make build VERSION={versionName}
build:
	docker build \
		-t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} \
		-f ${DOCKER_FILE_FULL_PATH} \
		${DOCKER_CONTEXT_PATH}
