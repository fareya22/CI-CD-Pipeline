import express from 'express';
const app = express();

const port = process.env.PORT || 7000;


app.get('/', (req, res) => {
    res.send('Hello, this is index.js responding!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;
