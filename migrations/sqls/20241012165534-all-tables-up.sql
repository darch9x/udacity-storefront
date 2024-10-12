create table products (
    id SERIAL PRIMARY KEY, name VARCHAR(100), price INTEGER, category VARCHAR(55)
);

create table users (
    id SERIAL PRIMARY KEY, firstName VARCHAR(100), lastName VARCHAR(100), password_digest VARCHAR(100)
);

create table orders (
    id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), status VARCHAR(20)
);

create table order_products (
    id SERIAL PRIMARY KEY, product_id INTEGER REFERENCES products(id), order_id INTEGER REFERENCES orders(id), quantity INTEGER
);