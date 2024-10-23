const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para crear un nuevo usuario
router.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;

        // Crear y guardar un nuevo usuario
        const newUser = new User({ name, email });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado correctamente', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
});

module.exports = router;
