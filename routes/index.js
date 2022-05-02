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

router.get('/tags',(req,res) => {
  const tags = [
    {id:1,name:'work'},
    {id:2,name:'mobile'},
    {id:3,name:'lifestyle'},
    {id:4,name:'motor'}]
    res.render('tags',{tags})
})

module.exports = router;