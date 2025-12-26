import express from 'express';
import bodyParser from 'body-parser';
import client from './client.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  client.getAll({}, (err, response) => {
    if (err) {
      return res.status(500).send('Error fetching customers');
    }
    res.json(response.customers);
  });
});

app.post('/create', (req, res) => {
  const newCustomer = req.body;
  client.create(newCustomer, (err, response) => {
    if (err) {
      return res.status(500).send('Error creating customer');
    }
    res.json(response);
  });
});

app.post('/update', (req, res) => {
  const updatedCustomer = req.body;
  client.update(updatedCustomer, (err, response) => {
    if (err) {
      return res.status(500).send('Error updating customer');
    }
    res.json(response);
  });
});

app.post('/delete', (req, res) => {
  const customerId = req.body.id;
  console.log('Deleting customer with ID:', customerId);
  client.remove({ id: customerId }, (err, response) => {
    if (err) {
      return res.status(500).send('Error deleting customer yo', err);
    }
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

