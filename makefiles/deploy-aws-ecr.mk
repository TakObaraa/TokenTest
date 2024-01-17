# 概要: docker imageをAmazon ECRへデプロイするタスクランナー
include ${abspath variables.mk}

# 入力値
DOCKER_IMAGE_NAME ?=

AWS_ACCOUNT_ID ?=
AWS_REGION ?=



# 固定値
ECR_REGISTRY = ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
ECR_IMAGE_NAME = ${ECR_REGISTRY}/${DOCKER_IMAGE_NAME}
ECR_IMAGE_TAG = ${DOCKER_IMAGE_TAG}




# NOTE: 誤操作防止のためtarget指定なしの場合はエラー扱いにする
all:
	@echo Please specify the target. >&2
	@exit 1

################################################################################
# タスク
################################################################################

# usage: make login AWS_REGION={} ECR_REGISTRY={}
login:
	@aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}

# usage:
#	make set-tag \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop}
set-tag:
	docker tag ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} ${ECR_IMAGE_NAME}:${ECR_IMAGE_TAG}

# usage: make push-image \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop}
push-image:
	docker push ${ECR_IMAGE_NAME}:${ECR_IMAGE_TAG}

################################################################################
# ワンライナー
################################################################################

# usage:
#	make deploy-image \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop}
deploy-image: login set-tag push-image;
