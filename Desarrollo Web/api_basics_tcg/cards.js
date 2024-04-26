import express from 'express';
export const cardRouter = express.Router();

let cards = [];

// Obtener todas las cartas
cardRouter.get('/', (req, res) => {
    if (cards.length === 0) {
        return res.status(404).json({ message: 'Aun no hay cartas disponibles' });
    } else {
    res.json(cards);
    }
});

// Obtener carta por ID
cardRouter.get('/:id', (req, res) => {
    const card = cards.find(c => c.id === parseInt(req.params.id));
    if (!card) {
        return res.status(404).json({ message: 'Carta no encontrada' });
    }
    res.json(card);
});

// Agregar una o varias cartas
cardRouter.post('/', (req, res) => {
    const newCards = req.body.cards;
    if (!newCards || !Array.isArray(newCards) || newCards.length === 0) {
        return res.status(400).json({ message: 'Datos proporcionados inválidos o el array está vacío' });
    }

    const addedCards = [];
    for (const card of newCards) {
        const { id, category, name, description, power } = card;
        // evalua que tenga todos los dats
        if (!id || !category || !name || !description || !power) {
            continue;
        }
        // evalua que la carta ingresada ya exista
        if (cards.some(c => c.id === id)) {
            continue;
        }

        cards.push({ id, category, name, description, power });
        addedCards.push({ id, category, name, description, power });
    }

    if (addedCards.length === 0) {
        res.status(409).json({ message: 'Ninguna carta fue agregada, pueden estar duplicadas o faltarle datos' });
    } else {
        res.status(201).json({ message: 'Cartas agregadas con éxito!!', cards: addedCards });
    }
});


// Eliminar una carta por ID
cardRouter.delete('/:id', (req, res) => {
    const cardIndex = cards.findIndex(c => c.id === parseInt(req.params.id));
    if (cardIndex === -1) {
        return res.status(404).json({ message: 'Carta no encontrada para eliminar' });
    }
    cards.splice(cardIndex, 1);
    res.json({ message: 'Carta eliminada' });
});

// Actualizar una carta por ID
cardRouter.put('/:id', (req, res) => {
    const card = cards.find(c => c.id === parseInt(req.params.id));
    if (!card) {
        return res.status(404).json({ message: 'Carta no encontrada' });
    }
    const { category, name, description, power } = req.body;
    if (category) {
        card.category = category;
    }
    if (name) {
        card.name = name;
    }
    if (description) {
        card.description = description;
    }
    if (power) {
        card.power = power;
    }
    res.json({ message: 'Carta actualizada con éxito!!' });
});
