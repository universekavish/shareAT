// Here we won't add logic, if too many logics then we can be lost between all the logics and all the requests, so routes logic is separately written in controllers/posts.js.
import express from "express";

import { getPosts, createPost } from '../controllers/posts.js';
const router = express.Router();

// http://localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;