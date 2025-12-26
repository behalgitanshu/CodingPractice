const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getData', (req, res) => {
    res.send({
        data: "Hello from the server!",
        timestamp: new Date().toISOString()
    });
});

const port = process.env.PORT || 5011;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

