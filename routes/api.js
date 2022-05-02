const { Router } = require('express');
const { getAnuncios } = require('../controllers/anuncios');

const api = Router();

api.get('/anuncios',getAnuncios);

module.exports = api;
