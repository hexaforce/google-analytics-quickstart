upf:
	COMPOSE_PROJECT_NAME=GA docker compose up --build

up:
	COMPOSE_PROJECT_NAME=GA docker compose up -d --build

down:
	COMPOSE_PROJECT_NAME=GA docker compose down

clear:
	docker volume rm GA_db-data

destroy:
	docker system prune -a --volumes
