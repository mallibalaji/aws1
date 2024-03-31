const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/processFile', upload.single('file'), (req, res) => {
    const file = req.file;
    const fieldName = req.body.fieldName;

    // Add your logic to process the file and create smaller files based on the selected field
    // For simplicity, let's just log the content for now
    const content = file.buffer.toString('utf-8');
    console.log(`File Content:\n${content}`);
    
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
