const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5050;

const app = express();

app.listen(port, console.log(`server started on ${port}`));
