-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS pokemon_tcg;

-- Eliminar el esquema si ya existe (opcional, ten cuidado con esto si no quieres perder datos)
DROP SCHEMA IF EXISTS pokemon_tcg;

-- Crear el esquema (base de datos)
CREATE SCHEMA pokemon_tcg;

-- Usar la base de datos
USE pokemon_tcg;

-- Crear tablas
CREATE TABLE Jugador (
    id_jugador INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    contraseña VARCHAR(50) NOT NULL,
    UNIQUE(id_jugador)
);

CREATE TABLE Partida (
    id_partida INT AUTO_INCREMENT PRIMARY KEY,
    id_jugador1 INT,
    id_jugador2 INT,
    ganador INT,
    tiempo TIME,
    FOREIGN KEY (id_jugador1) REFERENCES Jugador(id_jugador),
    FOREIGN KEY (id_jugador2) REFERENCES Jugador(id_jugador),
    UNIQUE(id_partida)
);

CREATE TABLE Deck (
    id_deck INT AUTO_INCREMENT PRIMARY KEY,
    id_jugador INT,
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador),
    UNIQUE(id_deck)
);

CREATE TABLE Carta (
    id_carta INT AUTO_INCREMENT PRIMARY KEY,
    UNIQUE(id_carta)
);

CREATE TABLE CartasDeck (
    id_cartaDeck INT AUTO_INCREMENT PRIMARY KEY,
    id_deck INT,
    id_carta INT,
    FOREIGN KEY (id_deck) REFERENCES Deck(id_deck),
    FOREIGN KEY (id_carta) REFERENCES Carta(id_carta),
    UNIQUE(id_cartaDeck)
);

CREATE TABLE Ataque (
    id_ataque INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    efecto TEXT,
    costo INT,
    UNIQUE(id_ataque)
);

CREATE TABLE Debilidad (
    id_debilidad INT AUTO_INCREMENT PRIMARY KEY,
    valor INT,
    tipo ENUM('Fuego', 'Agua', 'Planta', 'Eléctrico', 'Psíquico', 'Lucha', 'Oscuro', 'Acero', 'Hada'),
    UNIQUE(id_debilidad)
);

CREATE TABLE Resistencia (
    id_resistencia INT AUTO_INCREMENT PRIMARY KEY,
    valor INT,
    tipo ENUM('Fuego', 'Agua', 'Planta', 'Eléctrico', 'Psíquico', 'Lucha', 'Oscuro', 'Acero', 'Hada'),
    UNIQUE(id_resistencia)
);

CREATE TABLE Pokemon (
    id_pokemon INT AUTO_INCREMENT PRIMARY KEY,
    id_carta INT,
    nombre VARCHAR(50),
    tipo ENUM('Fuego', 'Agua', 'Planta', 'Eléctrico', 'Psíquico', 'Lucha', 'Oscuro', 'Acero', 'Hada', 'Dragón'),
    evolucion VARCHAR(50),
    ps INT,
    retirada INT,
    habilidades TEXT,
    id_ataque INT,
    id_debilidad INT,
    id_resistencia INT,
    estado ENUM('dormido', 'confundido', 'envenenado', 'quemado', 'paralizado') DEFAULT NULL,
    FOREIGN KEY (id_carta) REFERENCES Carta(id_carta),
    FOREIGN KEY (id_ataque) REFERENCES Ataque(id_ataque),
    FOREIGN KEY (id_debilidad) REFERENCES Debilidad(id_debilidad),
    FOREIGN KEY (id_resistencia) REFERENCES Resistencia(id_resistencia),
    UNIQUE(id_pokemon)
);

CREATE TABLE Energia (
    id_energia INT AUTO_INCREMENT PRIMARY KEY,
    id_carta INT,
    tipo ENUM('Fuego', 'Agua', 'Planta', 'Eléctrico', 'Psíquico', 'Lucha', 'Oscuro', 'Acero', 'Hada', 'Dragón'),
    efecto TEXT,
    FOREIGN KEY (id_carta) REFERENCES Carta(id_carta),
    UNIQUE(id_energia)
);

CREATE TABLE Entrenador (
    id_entrenador INT AUTO_INCREMENT PRIMARY KEY,
    id_carta INT,
    tipo ENUM('Objeto', 'Apoyo', 'Estadio'),
    efecto TEXT,
    FOREIGN KEY (id_carta) REFERENCES Carta(id_carta),
    UNIQUE(id_entrenador)
);
