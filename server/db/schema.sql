-- DROP DATABASE
DROP DATABASE IF EXISTS globetrotters_db;

-- CREATE DATABASE
CREATE DATABASE globetrotters_db;




-- DROP DATABASE IF EXISTS bucketlist_db;
-- CREATE DATABASE bucketlist_db;
-- -- Create tables
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL
-- );  

-- CREATE TABLE bucket_list (
--     id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(id) ON DELETE CASCADE,
--     country VARCHAR(255) NOT NULL,
--     item VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );