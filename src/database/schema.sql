CREATE DATABASE course;
USE course;

CREATE TABLE kursus (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  instructor VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  price VARCHAR(50) NOT NULL,
  rating integer NOT NULL,
  image VARCHAR(255),
  avatar VARCHAR(255),
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO kursus (title, description, instructor, company, price, rating, image, avatar) VALUES
('Big 4 Auditor Financial Analyst', 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik', 'Jenna Ortega', 'Gojek', 'Rp 300K', 3.5, 'content1', 'avatar1'),
('Big 4 Auditor Financial Analyst', 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik', 'Jenna Ortega', 'Gojek', 'Rp 300K', 3.5, 'content2', 'avatar2'),