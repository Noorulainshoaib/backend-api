const app = require('express')
const router = app.Router()
const {getAllCategories , getCategoryById,createCategory ,updateCategory,deleteCategory } = require ('./controller')


router.get('/get-all-categories', getAllCategories)
router.get('/get-category-by-id', getCategoryById)
router.post('/create-category',createCategory )
router.put('/updat-catgory', updateCategory)
router.delete('/delete-category',deleteCategory )



  module.exports = router
