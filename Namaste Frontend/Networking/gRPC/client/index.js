import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// TODO : Expose REST endpoints for gRPC client operations

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});