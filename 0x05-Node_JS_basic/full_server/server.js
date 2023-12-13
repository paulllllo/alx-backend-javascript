const express = require('express');
const mainRoutes = require('./routes/index');

const app = express();
const PORT = 1245;

app.use("/", mainRoutes)

app.listen(PORT, () => {
    console.log('Server is running');
});

export default app;
