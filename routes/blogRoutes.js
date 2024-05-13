const express = require('express')
const blogController = require('../controllers/blogController')


const router = express.Router()

// All News List 
router.get('/', blogController.blog_index)

// Create blog post
router.post('/', blogController.blog_create_post)

//  Create blog get
router.get('/create', blogController.blog_create_get);

//  Create blog get edit
router.get('/edit/:id', blogController.blog_edit_get);

// Create blog post edit
router.put('/edit/:id', blogController.blog_edit_post)

// Getting a single news
router.get('/:id', blogController.blog_detail)

// Delete News
router.delete('/:id', blogController.blog_delete)



module.exports = router