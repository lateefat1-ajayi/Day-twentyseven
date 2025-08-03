import express from 'express';
import { getIdeas, createIdea, updateIdea, deleteIdea } from '../controllers/ideaController.js';

const router = express.Router();

router.get('/', getIdeas);
router.post('/', createIdea);
router.patch('/:id', updateIdea);
router.delete('/:id', deleteIdea);

export default router;
