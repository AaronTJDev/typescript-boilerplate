import express from 'express';

const app = express();
const port = 3000;

app.post('/read', (req, res) => {
    
});

app.listen(port, () => {
    return console.log(`Express listening on port: ${port}`);
});