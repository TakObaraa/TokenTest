# 概要: docker imageをghcrへデプロイするタスクランナー
include ${abspath variables.mk}

# 入力値
DOCKER_IMAGE_NAME ?=

GHCR_OWNER ?=
GHCR_AUTH_TOKEN ?=

# 固定値
GHCR_REGISTRY = ghcr.io/${GHCR_OWNER}
GHCR_IMAGE_NAME = ${GHCR_REGISTRY}/${DOCKER_IMAGE_NAME}
GHCR_IMAGE_TAG = ${DOCKER_IMAGE_TAG}






# NOTE: 誤操作防止のためtarget指定なしの場合はエラー扱いにする
all:
	@echo Please specify the target. >&2
	@exit 1

################################################################################
# タスク
################################################################################

# usage: make login GHCR_AUTH_TOKEN={} GHCR_OWNER={}
login:
	@echo ${GHCR_AUTH_TOKEN} | docker login ${GHCR_REGISTRY} -u ${GHCR_OWNER} --password-stdin

# usage:
#	make set-tag \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop}
set-tag:
	docker tag ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} ${GHCR_IMAGE_NAME}:${GHCR_IMAGE_TAG}

# usage: make push-image \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop}
push-image:
	docker push ${GHCR_IMAGE_NAME}:${GHCR_IMAGE_TAG}

################################################################################
# ワンライナー
################################################################################

# usage:
#	make deploy-image \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop} \
#		GHCR_AUTH_TOKEN={}
deploy-image: login set-tag push-image;
