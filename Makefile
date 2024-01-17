# 概要: docker imageのビルド・デプロイを行うタスクランナー
include ${abspath makefiles/variables.mk}

# NOTE: 誤操作防止のためtarget指定なしの場合はエラー扱いにする
all:
	@echo Please specify the target. >&2
	@exit 1

# usage:
#	make build-image \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop}
build-image:
	make build -C ${DOCKAE_IMAGE_BUILD_MAKE_PATH}

# usage:
#	make build-tools-image \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop}
build-tools-image: DOCKER_BASE_DIR=docker-tools
build-tools-image:
	make build -C ${DOCKAE_IMAGE_BUILD_MAKE_PATH}


# usage:
# 	make deploy-image-ghcr \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop} \
#		GHCR_OWNER={} \
#		GHCR_AUTH_TOKEN={}
deploy-image-ghcr:
	make deploy-image -C ${TASK_FILE_PATH} -f deploy-ghcr.mk

# usage:
#	make deploy-image-aws-ecr \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop} \
#		AWS_ACCOUNT_ID ={} \
#		AWS_REGION ={}
deploy-image-aws-ecr:
	make deploy-image -C ${TASK_FILE_PATH} -f deploy-aws-ecr.mk

# usage:
#	make deploy-service-aws-ecs \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop} \
#		ECS_CLUSTER_NAME={} \
#		ECS_SERVICE_NAME={} \
#		ECS_TASK_NAME={} \
#		ECS_TASK_FILE_PATH={} \
#		ECR_IMAGE_TAG={}
deploy-service-aws-ecs:
	make deploy-ecs -C ${TASK_FILE_PATH} -f deploy-aws-ecs.mk

# usage:
#	make update-env-s3-from-ssm \
#		SERVICE_NAME={} \
#		ENVIRONMENT={prod|stag|test|verify|develop} \
#		SSM_PARAMETER_NAME={} \
#		S3_ENV_BUCKET_NAME={}
update-env-s3-from-ssm:
	params=$$( \
		aws ssm get-parameter \
			--name ${SSM_PARAMETER} \
			--with-decryption \
			--query 'Parameter.Value' \
			--output text \
		) && \
		echo "$$params" | \
		aws s3 cp - s3://${S3_ENV_BUCKET_NAME}${SSM_PARAMETER}

# usage:
#	make update-env-local-from-ssm \
#		SERVICE_NAME={} \
#		ENVIRONMENT={prod|stag|test|verify|develop} \
#		SSM_PARAMETER_NAME={}
update-env-local-from-ssm:
	aws ssm get-parameter \
		--name ${SSM_PARAMETER} \
		--with-decryption \
		--query 'Parameter.Value' \
		--output text > docker/_/mount/.${ENVIRONMENT}.${SSM_PARAMETER_NAME}
