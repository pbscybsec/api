const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/Db');
const itemsRouter = require('./routes/Items');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to the database
connectDB();

app.use('/api/items', itemsRouter);

app.get('/', (req, res) => {
    res.send('CRUD Application');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
