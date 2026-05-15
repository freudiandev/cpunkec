#!/bin/bash
# backup-mariadb.sh: Realiza un respaldo seguro de la base de datos MariaDB del contenedor Docker

set -e

BACKUP_DIR="./backups"
DATE=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="$BACKUP_DIR/mariadb_backup_$DATE.sql"
CONTAINER_NAME="$(docker-compose ps -q mariadb)"

mkdir -p "$BACKUP_DIR"

echo "Realizando respaldo de la base de datos MariaDB..."
docker exec "$CONTAINER_NAME" mysqldump -u root -pexample_root_password --all-databases > "$BACKUP_FILE"

echo "Respaldo completado: $BACKUP_FILE"
