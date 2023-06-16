import express from 'express';
import { updateWholesaler, deletWholesaler, createWholesaler, getWholesaler } from '../controllers/wholesaler.js';


const router = express.Router();

router.get('/get', getWholesaler);

router.post('/add', createWholesaler);

router.put('/edit/:id', updateWholesaler);

router.delete('/delete/:id', deletWholesaler);

export default router;  