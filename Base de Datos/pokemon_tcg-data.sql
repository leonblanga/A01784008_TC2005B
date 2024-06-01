-- Usar la base de datos
USE pokemon_tcg;

-- Insertar datos en la tabla Jugador
INSERT INTO Jugador (id_jugador, nombre_usuario, contraseña) VALUES 
(1, 'leonblanga', 'pikachu123'),
(2, 'leon', 'pokemon24'),
(3, 'usuario', 'tcgdatabase15!');

-- Insertar datos en la tabla Partida
INSERT INTO Partida (id_partida, id_jugador1, id_jugador2, ganador, tiempo) VALUES 
(1, 1, 2, 1, '00:30:00'),
(2, 2, 3, 2, '00:45:00');

-- Insertar datos en la tabla Deck
INSERT INTO Deck (id_deck, id_jugador) VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla Carta
INSERT INTO Carta (id_carta) VALUES 
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13), (14), (15), (16), (17), (18), (19), (20), (21), (22), (23), (24), (25), (26), (27), (28), (29), (30), (31), (32), (33), (34), (35), (36), (37), (38), (39), (40);

-- Insertar datos en la tabla CartasDeck
INSERT INTO CartasDeck (id_cartaDeck, id_deck, id_carta) VALUES 
(1, 1, 1), (2, 1, 2), (3, 1, 3), (4, 1, 4), (5, 1, 5), 
(6, 1, 6), (7, 1, 7), (8, 1, 8), (9, 1, 9), (10, 1, 10), 
(11, 2, 11), (12, 2, 12), (13, 2, 13), (14, 2, 14), (15, 2, 15), 
(16, 2, 16), (17, 2, 17), (18, 2, 18), (19, 2, 19), (20, 2, 20);

-- Insertar datos en la tabla Ataque
INSERT INTO Ataque (id_ataque, nombre, efecto, costo) VALUES 
(1, 'Thunder Shock', 'Paralyze the opponent', 10),
(2, 'Water Gun', 'Douse the opponent', 10),
(3, 'Flame Thrower', 'Burn the opponent', 30),
(4, 'Vine Whip', 'Whip the opponent', 20),
(5, 'Psybeam', 'Confuse the opponent', 20),
(6, 'Rock Slide', 'Hit the opponent with rocks', 25),
(7, 'Shadow Ball', 'Scare the opponent', 20),
(8, 'Iron Tail', 'Smash the opponent', 15),
(9, 'Fairy Wind', 'Dazzle the opponent', 20),
(10, 'Dragon Claw', 'Slash the opponent', 25);

-- Insertar datos en la tabla Debilidad
INSERT INTO Debilidad (id_debilidad, valor, tipo) VALUES 
(1, 2, 'Eléctrico'), (2, 2, 'Planta'), (3, 2, 'Fuego'), 
(4, 2, 'Agua'), (5, 2, 'Psíquico'), (6, 2, 'Lucha'), 
(7, 2, 'Oscuro'), (8, 2, 'Acero'), (9, 2, 'Hada');

-- Insertar datos en la tabla Resistencia
INSERT INTO Resistencia (id_resistencia, valor, tipo) VALUES 
(1, 2, 'Fuego'), (2, 2, 'Agua'), (3, 2, 'Planta'), 
(4, 2, 'Eléctrico'), (5, 2, 'Psíquico'), (6, 2, 'Lucha'), 
(7, 2, 'Oscuro'), (8, 2, 'Acero'), (9, 2, 'Hada');

-- Insertar datos en la tabla Pokemon
INSERT INTO Pokemon (id_pokemon, id_carta, nombre, tipo, evolucion, ps, retirada, habilidades, id_ataque, id_debilidad, id_resistencia, estado) VALUES 
(1, 1, 'Pikachu', 'Eléctrico', 'Raichu', 60, 1, 'Static', 1, 1, 1, NULL),
(2, 2, 'Squirtle', 'Agua', 'Wartortle', 50, 1, 'Torrent', 2, 2, 2, NULL),
(3, 3, 'Charmander', 'Fuego', 'Charmeleon', 50, 1, 'Blaze', 3, 3, 3, NULL),
(4, 4, 'Bulbasaur', 'Planta', 'Ivysaur', 50, 1, 'Overgrow', 4, 4, 4, NULL),
(5, 5, 'Abra', 'Psíquico', 'Kadabra', 40, 1, 'Synchronize', 5, 5, 5, NULL),
(6, 6, 'Geodude', 'Lucha', 'Graveler', 50, 1, 'Sturdy', 6, 6, 6, NULL),
(7, 7, 'Gastly', 'Oscuro', 'Haunter', 40, 1, 'Levitate', 7, 7, 7, NULL),
(8, 8, 'Magnemite', 'Acero', 'Magneton', 50, 1, 'Magnet Pull', 8, 8, 8, NULL),
(9, 9, 'Clefairy', 'Hada', 'Clefable', 50, 1, 'Cute Charm', 9, 9, 9, NULL),
(10, 10, 'Dratini', 'Dragón', 'Dragonair', 50, 1, 'Shed Skin', 10, 1, 2, NULL);

-- Insertar datos en la tabla Energia
INSERT INTO Energia (id_energia, id_carta, tipo, efecto) VALUES 
(1, 12, 'Eléctrico', 'Provides Electric energy'),
(2, 13, 'Agua', 'Provides Water energy'),
(3, 14, 'Fuego', 'Provides Fire energy'),
(4, 15, 'Planta', 'Provides Grass energy'),
(5, 16, 'Psíquico', 'Provides Psychic energy'),
(6, 17, 'Lucha', 'Provides Fighting energy'),
(7, 18, 'Oscuro', 'Provides Dark energy'),
(8, 19, 'Acero', 'Provides Steel energy'),
(9, 20, 'Hada', 'Provides Fairy energy'),
(10, 21, 'Dragón', 'Provides Dragon energy');

-- Insertar datos en la tabla Entrenador
INSERT INTO Entrenador (id_entrenador, id_carta, tipo, efecto) VALUES 
(1, 23, 'Objeto', 'Heals 20 HP'),
(2, 24, 'Apoyo', 'Draw 3 cards'),
(3, 25, 'Estadio', 'Increase attack power'),
(4, 26, 'Objeto', 'Remove all status conditions'),
(5, 27, 'Apoyo', 'Search your deck for a card'),
(6, 28, 'Estadio', 'Reduce damage taken'),
(7, 29, 'Objeto', 'Switch your active Pokémon'),
(8, 30, 'Apoyo', 'Shuffle your hand into your deck'),
(9, 31, 'Estadio', 'Prevent all effects of attacks'),
(10, 32, 'Objeto', 'Attach an extra energy'),
(11, 33, 'Apoyo', 'Look at your opponent’s hand');
