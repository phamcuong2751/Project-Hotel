### Get Started
- Go to your file project (where you’ve unzipped the product)
- (If you are on a linux based terminal) Simply run `npm run install:clean`
- (If not) Run in terminal `npm install`
- Run in terminal `npm start`
- Navigate to https://localhost:${APP_PORT}/doc (To test API)
### Run docker compose and init database
- Run in terminal `docker-compose up -d`
- Access to postgres container:
`docker exec -it ${DATABASE_NAME}.postgres bash`
- Run in terminal `psql -U postgres -d sad -f /var/lib/postgresql/data/init.sql`
