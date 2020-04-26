const express = require('express');
const { body } = require('express-validator');
const controllers = require('../controller/feed_controller');

const router = express.Router();

//GET /feed/post
router.get('/post',controllers.getPost);
//POST /feed/post
router.post('/post', 
[
    //validation middleware
    //title
    body('title')
    .trim().
    isLength({ min: 5 }),
    //content
    body('content')
    .trim()
    .isLength({ min: 5 })
], controllers.createPost);

module.exports = router;