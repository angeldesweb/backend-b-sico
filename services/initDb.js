const mongoose = require('mongoose');
const Anuncio = require('../models/Anuncio');
const data = require('./initData.json');

const initDb = async () => {
    try {
        await Anuncio.insertMany(data);
        console.log('La base de datos ha sido inicializada');
        return;
    } catch (error) {
        throw error;
    }
};

const cleanDb = async () => {
    try {
        const docs = await Anuncio.find();
        if(docs.length !== 0) await Anuncio.deleteMany();
        console.log('Se ha depurado la base de datos');
        return;
    } catch (error) {
        throw error;
    }
};

(async () => {
    console.log('Configurando base de datos');
    console.log('---------------------------');
    console.log('\n');
    try {
        await mongoose.connect('mongodb://localhost/nodepop');
        await cleanDb();
        await initDb();
        process.exit();
    } catch (error) {
        console.log(error);
    }
})();