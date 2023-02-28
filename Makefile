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

codegen:
	docker compose exec -T codegen sqlacodegen mysql+pymysql://root:db-78n9n@127.0.0.1/analytics > models.py
