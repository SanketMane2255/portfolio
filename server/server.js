const express = require('express');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
