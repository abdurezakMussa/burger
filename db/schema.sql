DROP DATABASE IF EXISTS burger_db;
create DATABASE burger_db;
use burger_db;

CREATE TABLE burger
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(150) NOT NULL,
    devoured boolean DEFAULT false,
    PRIMARY KEY (id)
);