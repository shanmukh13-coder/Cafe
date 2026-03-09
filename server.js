const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));  // Logging requests
app.use(express.json());

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
    res.send('Welcome to the Cafe!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});