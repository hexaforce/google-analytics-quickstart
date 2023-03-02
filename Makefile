upf:
	COMPOSE_PROJECT_NAME=ga docker compose up --build

up:
	COMPOSE_PROJECT_NAME=ga docker compose up -d --build

down:
	COMPOSE_PROJECT_NAME=ga docker compose down

clear:
	docker volume rm ga_db-data

destroy:
	docker system prune -a --volumes
