const express = require('express')
const router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get('/',produtoController.list)
router.get('/:id',produtoController.findById)
router.post('/', produtoController.create)
router.put('/:id', produtoController.update)
router.patch('/:id', produtoController.partialUpdate)
router.delete('/:id', produtoController.delete)

module.exports = router;