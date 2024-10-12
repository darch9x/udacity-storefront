# Storefront Backend Project

## Getting Started

This project is about Storefront api including architect the database to fulfill the data requirements and craft a RESTful API that exposes that information to the frontend developer.

## Set up database

1, Open psql as user: `psql -U postgres`

2, Create user: `CREATE USER storefront_user WITH PASSWORD 'password123';`

3, Create dev and test databases:

    CREATE DATABASE storefront;

    CREATE DATABASE storefront_test;

4, Connect to database and grant PRIVILEGES:

For Dev database:

        \c storefront
        
        GRANT ALL PRIVILEGES ON DATABASE storefront TO storefront_user;
        
For Test database:

        \c storefront_test
        
        GRANT ALL PRIVILEGES ON DATABASE storefront_test TO storefront_user;   

## Running ports

After running start, Backend will run on port `3000`, Databased will run on port `5432`

## Package installation instructions

1, Install dependencies:
`npm install`

2, Migrate database:
`db-migrate up`

## Submission Details

Because dotenv is in .gitignore, so environment variables will be included here:

    POSTGRES_HOST=127.0.0.1
    POSTGRES_DB=storefront
    POSTGRES_DB_TEST=storefront_test
    POSTGRES_USER=shopping_user
    POSTGRES_PASSWORD=password123
    BCRYPT_PASSWORD=your-secret-password
    SALT_ROUNDS=10
    TOKEN_SECRET=your-token-secret
    ENV=dev
