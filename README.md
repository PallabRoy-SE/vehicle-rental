# Vehicle Rental App

This is a SERN stack Rental application to book specific vehicle as per requirements for a specific time.

# Project Setup

## Available Scripts

In the project root directory, you can run:

### `npm install`

Install necessary dependencies in both backend and vehicle-rental-app directory.

### Migrate Database

### `npx sequelize-cli db:migrate`

In backend directory open cmd and run the above command to migrate database

### Add initial values in Database

### `npx sequelize-cli db:seed:all`

Run the above command to insert initial values in the database

### Env setup

Duplicate env.template file in the backend directory and rename it with .env and set a port like 5000 in the place of #BACKEND_PORT#

### `npm start`

Do in in both backend and vehicle-rental-app directory to runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
