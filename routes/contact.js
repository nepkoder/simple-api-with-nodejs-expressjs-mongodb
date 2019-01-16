// all contact api endpoint shall be defined in this file
// init express
const router = require('express').Router();

// import contact controller
const contactController = require('../controller/contactCtrl');

// Contact routes
router.get('/api/contacts/', contactController.getAll);
router.post('/api/contact/', contactController.create);

router.get('/api/contacts/:id', contactController.getOneById);
router.put('/api/contact/:id',contactController.update);
router.delete('/api/contact/:id',contactController.delete);


module.exports = router;
