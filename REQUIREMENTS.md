# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index /products [GET]
- Show /products/:id [GET]
- Create [token required] /products/ [POST]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required] /users [GET]
- Show [token required] /users/:id [GET]
- Create N[token required] /users/ [POST]

#### Orders
- Current Order by user (args: user id)[token required] /orders/byUser/:userId [GET]
- [OPTIONAL] Index [token required] /orders [GET]
- [OPTIONAL] Add product to order [token required] /orders/addProductToOrder [POST]
- [OPTIONAL] Create [token required] /orders [POST]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
- id
- name
- price
- [OPTIONAL] category
id SERIAL PRIMARY KEY, name VARCHAR(100), price INTEGER, category VARCHAR(55)

#### User
- id
- firstName
- lastName
- password
id SERIAL PRIMARY KEY, firstName VARCHAR(100), lastName VARCHAR(100), password_digest VARCHAR(100)

#### Orders
- id
<!-- - id of each product in the order -->
<!-- - quantity of each product in the order -->
- user_id
- status of order (active or complete)
id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), status VARCHAR(20)

#### Order Products
- id
- id of each product in the order
- id of order
- quantity of each product in the order
id SERIAL PRIMARY KEY, product_id INTEGER REFERENCES products(id), order_id INTEGER REFERENCES orders(id), quantity INTEGER
