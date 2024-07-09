const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});

const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);