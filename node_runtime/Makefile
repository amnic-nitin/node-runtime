NODE_VERSION=18.5.0
NPM_VERSION=8.16.0
IMAGE_NAME=mynode
IMAGE_TAG=latest
PORT=3000

docker: 
	docker image build --tag $(IMAGE_NAME):$(IMAGE_TAG) -f Dockerfile .


paketo:
	pack build $(IMAGE_NAME)  --builder paketobuildpacks/builder:full

google: 
	pack build $(IMAGE_NAME)  --builder gcr.io/buildpacks/builder:v1 

heroku: 
	pack build $(IMAGE_NAME) --builder heroku/buildpacks:20

run:
	docker container run -dit --rm --name $(IMAGE_NAME) -p $(PORT):$(PORT) -e SAMPLE_SECRET=SampleSecretFromMakefileScript  -e SAMPLE_PARAMETER=SamplePARAMETERFromMakefileScript -e config_path=config/prod.env $(IMAGE_NAME):$(IMAGE_TAG)
	echo "curl mynode-app.local.gd:3000"

clean:
	docker container stop $(IMAGE_NAME) && docker rmi -f $(IMAGE_NAME):$(IMAGE_TAG)
