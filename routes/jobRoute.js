import express from 'express';
import { addJob, viewJob, updateJob, applyJob } from '../controllers/jobController.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    const filename = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
    callback(null, filename);
  },
});
const upload = multer({ storage: storage });

// Define the routes
router.post('/', addJob); // Route for adding a job
router.get('/', viewJob); // Route for viewing all jobs
router.put('/:id', updateJob); // Route for updating a job
router.post('/apply', upload.single('file'), applyJob); // Route for applying for a job with file upload

export default router;
