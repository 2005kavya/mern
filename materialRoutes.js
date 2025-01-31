import express from 'express';
import protect from '../middleware/authMiddleware.js';
import Material from '../models/Material.js';

const router = express.Router();

// Get materials based on interests
router.get('/', protect, async(req, res) => {
    const user = req.user;
    const materials = await Material.find({ category: { $in: user.interests } });
    res.json(materials);
});

export default router;