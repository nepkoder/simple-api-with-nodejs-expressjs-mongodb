// all contact api endpoint shall be defined in this file
// init express
const router = require('express').Router();

// import contact controller
const contactController = require('./contactCtrl');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contact/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;