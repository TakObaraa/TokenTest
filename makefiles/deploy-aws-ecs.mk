# 概要: Amazon ECSをデプロイするタスクランナー
include ${abspath variables.mk}

# 入力値
DOCKER_IMAGE_NAME ?=

ECS_CLUSTER_NAME ?=
ECS_SERVICE_NAME ?=
ECS_TASK_NAME ?=
ECS_TASK_FILE_PATH ?=


# 固定値
ECS_TASK_DIR_PATH = $(shell dirname ${ECS_TASK_FILE_PATH})
ECS_TASK_BASE_FILE_NAME = $(shell basename ${ECS_TASK_FILE_PATH})
ECS_TASK_USE_FILE_NAME = ${ENVIRONMENT}.${ECS_TASK_BASE_FILE_NAME}
ECS_TASK_BASE_FILE_PATH = ${ECS_TASK_DIR_PATH}/${ECS_TASK_BASE_FILE_NAME}
ECS_TASK_USE_FILE_PATH = ${ECS_TASK_DIR_PATH}/${ECS_TASK_USE_FILE_NAME}
export ECR_REGISTRY = ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
export ECR_IMAGE_NAME = ${ECR_REGISTRY}/${DOCKER_IMAGE_NAME}
export ECR_IMAGE_TAG = ${DOCKER_IMAGE_TAG}
# NOTE: envsubstコマンドを使用してテキストファイルの環境変数を置換するためexportを使用している



# NOTE: 誤操作防止のためtarget指定なしの場合はエラー扱いにする
all:
	@echo Please specify the target
	@exit 1

################################################################################
# タスク
################################################################################

# NOTE: Amazon ECRにコンテナイメージが存在するか確認する
# usage:
#	make image-exists \
#		DOCKER_IMAGE_NAME={} \
#		ECR_IMAGE_TAG=`git rev-parse HEAD`
image-exists:
	aws ecr describe-images --repository-name ${DOCKER_IMAGE_NAME} --image-ids imageTag=${ECR_IMAGE_TAG}

# NOTE: 置換文字のエスケープが手間なので、区切り文字を/から@にしています。
#       もし動的に値を書き換える必要がある場合は文字列置換の処理を追加してください。
# usage:
#	make rewrite-task-define \
#		ECS_TASK_FILE_PATH={} \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop}
rewrite-task-define:
	envsubst < ${ECS_TASK_BASE_FILE_PATH} > ${ECS_TASK_USE_FILE_PATH}


# NOTE: タスク定義ファイルを更新し、AWS ECSのタスク定義をリビジョン
#       コマンド実行後、対話モードに入るため出力結果を捨てています
# usage:
#	make revision-task-define \
#		ECS_TASK_FILE_PATH={}
revision-task-define:
	aws ecs register-task-definition \
		--no-cli-pager \
		--cli-input-json file://${ECS_TASK_USE_FILE_PATH}


# NOTE: AWS ECSのサービスを更新
#       コマンド実行後、対話モードに入るため出力結果を捨てています
# usage:
#	make ecs-service-update \
#		ECS_CLUSTER_NAME={} \
#		ECS_SERVICE_NAME={} \
#		ECS_TASK_NAME={}
ecs-service-update:
	aws ecs update-service \
		--no-cli-pager \
		--cluster ${ECS_CLUSTER_NAME} \
		--service ${ECS_SERVICE_NAME} \
		--task-definition ${ECS_TASK_NAME}


################################################################################
# ワンライナー
################################################################################


# usage:
#	make deploy-ecs \
#		ECS_CLUSTER_NAME={} \
#		ECS_SERVICE_NAME={} \
#		ECS_TASK_FILE_PATH={} \
#		ECS_TASK_NAME={} \
#		DOCKER_IMAGE_NAME={} \
#		VERSION={latest|x.x.x} \
#		ENVIRONMENT={prod|stag|test|verify|develop}
deploy-ecs: image-exists rewrite-task-define revision-task-define ecs-service-update;
