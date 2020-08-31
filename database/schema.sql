DROP DATABASE IF EXISTS moviesDatabase;
CREATE DATABASE moviesDatabase;
USE moviesDatabase;

CREATE TABLE movieTable (
  id int(3) NOT NULL AUTO_INCREMENT,
  title varchar(20),
  watched BOOLEAN,
  PRIMARY KEY (id)
);

-- 1 = true
INSERT INTO movieTable (title, watched) VALUES ('One Piece', true);
INSERT INTO movieTable (title, watched) VALUES ('Zoro', true);
INSERT INTO movieTable (title, watched) VALUES ('Luffy', true);
INSERT INTO movieTable (title, watched) VALUES ('Sanjin', true);

-- select * from movieTable WHERE watched = true;