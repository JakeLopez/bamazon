CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INTEGER(11) auto_increment NOT null,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(10),
stock_quantity INTEGER(10),
PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Taylor Made Driver", "Golf", 299, 25);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Ping Putter", "Golf", 119, 12);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Callaway Wedge ", "Golf", 99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Head Racquets", "Tennis", 169, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Addidas Tennis Bag", "Tennis", 71, 6);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("DEMARINI Bat ", "Baseball", 225, 65);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Nike Cleats ", "Baseball", 79, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Wilson Glove ", "Baseball", 359, 4);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("All Star B-Glove ", "Baseball", 39, 45);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Oakley Sun Glasses ", "Baseball", 199, 22);
