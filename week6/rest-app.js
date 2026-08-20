const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: "Java Programming" },
    { id: 2, title: "HTML and CSS" }
];

// GET
app.get("/books", (req, res) => {
    res.json(books);
});

// POST
app.post("/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// PUT
app.put("/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    book.title = req.body.title;

    res.json({
        message: "Book updated",
        book: book
    });
});

// DELETE
app.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const oldLength = books.length;

    books = books.filter(b => b.id !== id);

    if (books.length === oldLength) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.json({
        message: "Book deleted",
        books: books
    });
});

app.listen(PORT, () => {
    console.log(`REST API running at http://localhost:${PORT}`);
});