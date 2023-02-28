upf:
	COMPOSE_PROJECT_NAME=x docker compose up --build

up:
	COMPOSE_PROJECT_NAME=x docker compose up -d --build

down:
	COMPOSE_PROJECT_NAME=x docker compose down

clear:
	docker volume rm x_db-data

destroy:
	docker system prune -a --volumes
