import {Router} from 'express';
import {createTdo, getTodos, updateTodo, deleteTodo} from '../controllers/todo';

// adding middleware and types
const router = Router();
router.post('/', createTdo);
router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
export default router;