
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./Utilities/db_connect');
const waitlistRoutes = require('./Routes/waitlistRoutes');
const { numberController } = require('./Controllers/numberController');

const app = express();

const corsConfiguration = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsConfiguration));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", waitlistRoutes);
app.get('/api/data', numberController);

const PORT = process.env.PORT || 8080;


dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening at Port: ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
});

module.exports = app;