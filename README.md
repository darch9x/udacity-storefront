# Storefront Backend Project

## Getting Started

This project is about Storefront api including architect the database to fulfill the data requirements and craft a RESTful API that exposes that information to the frontend developer.

## Set up database

1, Open psql as user: `psql -U postgres`
2, Create databases:
    `CREATE DATABASE storefront;`
    `CREATE DATABASE storefront_test;`

## Running ports

After running start, the ports are running on:
    Backend: 3000
    Database: 5432

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
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=123
    BCRYPT_PASSWORD=my-secret-password
    SALT_ROUNDS=10
    TOKEN_SECRET=token-secret-here
    ENV=dev
