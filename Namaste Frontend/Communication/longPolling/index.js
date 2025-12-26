const express = require('express');
const app = express();

let data = "Initial Data";

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const waitingClients = [];

app.get('/getData', (req, res) => {
    if(data !== req.query.lastData) {
        res.json({data});
    } else {
        waitingClients.push(res);
    }
});

app.get('/updateData', (req, res) => {
    const newData = req.query.newData;
    if(newData) {
        data = newData;
        while(waitingClients.length > 0) {
            const clientRes = waitingClients.pop();
            clientRes.json({data});
        }
        res.send("Data updated");
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

const port = process.env.PORT || 5011;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
