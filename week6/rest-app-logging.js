const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Custom logging middleware
app.use((req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Time:", new Date().toLocaleTimeString());

    next();
});

let books = [
    { id: 1, title: "Java Programming" },
    { id: 2, title: "TypeScript Basics" }
];

app.get("/books", (req, res) => {
    res.json(books);
});

app.post("/books", (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title
    };

    books.push(book);

    res.status(201).json(book);
});

app.put("/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    book.title = req.body.title;

    res.json(book);
});

app.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);

    books = books.filter(b => b.id !== id);

    res.json({
        message: "Book removed successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});