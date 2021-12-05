const express = require('express');
const userRouter = require('./routes/user.routes');
const PORT = process.env.PORT || 8000;

const app = express();

app.use('/api', userRouter);

app.listen(PORT, () => console.log(`Server listen port ${PORT}`));