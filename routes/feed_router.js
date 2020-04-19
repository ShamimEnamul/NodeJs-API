const express = require('express');
const controllers = require('../controller/feed_controller');

const router = express.Router();

//GET /feed/posts
router.get('/post',controllers.getPosts);

router.post('/post', controllers.createPost);

module.exports = router;