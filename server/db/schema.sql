-- DROP DATABASE
DROP DATABASE IF EXISTS globetrotters_db;

-- CREATE DATABASE
CREATE DATABASE globetrotters_db;




DROP DATABASE IF EXISTS bucketlist_db;
CREATE DATABASE bucketlist_db;
-- Create tables
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);  