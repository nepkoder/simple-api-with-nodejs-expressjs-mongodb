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

// router.route('/contacts')
// 	.get(contactController.index)
// 	.post(contactController.new);

// router.route('/contact/:contact_id')
// 	.get(contactController.view)
// 	.patch(contactController.update)
// 	.put(contactController.update)
// 	.delete(contactController.delete);

module.exports = router;
