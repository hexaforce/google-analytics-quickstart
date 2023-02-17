upf:
	docker compose up --build

up:
	docker compose up -d --build

down:
	docker compose down

destroy:
	docker system prune -a --volumes
