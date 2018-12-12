#!/bin/sh

set -e

echo "Wait for MySQL database to be ready..."
sleep 30

echo "MySQL database successfully created."

echo "Applying database migrations..."
node db_schema.js
echo "Table 'scores' successfully created."

node server.js
