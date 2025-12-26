import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.all('/', (req, res) => {
    res.send('I am up!');
});

const todos = [
    {
        id: '1',
        title: 'Task 1',
        status: 'completed'
    },
    {
        id: '2',
        title: 'Task 2',
        status: 'not started'
    },
]

// READ
app.get('/todos', (req, res) => {
    res.json(todos);
})

// CREATE
app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({
        status: 'added new todo'
    });
})

// UPDATE
app.put('/todos/:id', (req, res) => {
    const updatedTodo = req.body;
    const todoIndex = todos.findIndex((todo) => todo.id == req.params.id);
    if(todoIndex != -1){
        todos[todoIndex] = {
            id: req.params.id,
            ...updatedTodo
        }
    }

    res.json({
        message: 'Todo Updated'
    });
});

// DELETE
app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex((todo) => todo.id == req.params.id);
    if(todoIndex != -1){
        todos.splice(todoIndex, 1);
    }

    res.json({
        message: 'Todo Deleted'
    });
});

const PORT = 5111;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})