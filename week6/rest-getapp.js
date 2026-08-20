const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my REST API",
        status: "Running"
    });
});

app.get("/books", (req, res) => {
    const books = [
        { id: 1, name: "Java Basics", price: 400 },
        { id: 2, name: "Web Development", price: 550 },
        { id: 3, name: "TypeScript", price: 450 }
    ];

    res.json(books);
});

app.get("/book/:id", (req, res) => {
    const bookId = req.params.id;

    res.json({
        id: bookId,
        name: "Java Basics",
        available: true
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});