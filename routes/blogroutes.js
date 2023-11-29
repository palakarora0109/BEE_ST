const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogcontroller');
const Blog = require("../model/blog") 
// path of the book.js file

router.get("/GET/api/posts", blogsController.getAllBlog);
router.post("/POST/api/posts",blogsController.addBlog);
router.get("/GET/api/posts/:id", blogsController.getById);
router.put("/PUT/api/posts/:id",blogsController.updateBlog);
router.delete("/DELETE/api/posts/:id",blogsController.deleteBlog);

module.exports = router;