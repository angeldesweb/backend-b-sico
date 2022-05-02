const { Router } = require('express');

const api = require('./api');
const adv = require('./adv');

const fs = require('fs');
const path = require('path');

const router = Router();

router.use('/apiv1',api);
router.use('/anuncios',adv);

router.get('/', async (req,res) => {
  try {
    const filename = path.join(__dirname, '../README.md'); 
    const readme = await new Promise((res, rej) => 
      fs.readFile(filename, 'utf8', (err, data) => err ? rej(err) : res(data) )
    );
    return res.render('index',{readme});
  } catch (error) {
    return res.render('error',{error,message:'Error del servidor'});
  }
});

module.exports = router;