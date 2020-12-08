DROP TABLE IF EXISTS trails;

CREATE TABLE trails (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    mountain TEXT NOT NULL,
    terrain TEXT,
    skill_level INTEGER NOT NULL
)

CREATE TABLE coffees (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    roast TEXT,
    price INTEGER NOT NULL
)

CREATE TABLE hoodies (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    size TEXT NOT NULL,
    color TEXT NOT NULL,
    price INTEGER NOT NULL
)

CREATE TABLE dogs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    breed TEXT NOT NULL,
    age INTEGER NOT NULL
)

CREATE TABLE beaches (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    shore TEXT,
    parking TEXT
)