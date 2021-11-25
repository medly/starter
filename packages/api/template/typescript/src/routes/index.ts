import { Router } from 'express';

const router: Router = Router();

let Books: { id: string; title: string; author: string }[] = [
    { id: '1', title: 'Book 1', author: 'Author 1' },
    { id: '2', title: 'Book 2', author: 'Author 2' },
    { id: '3', title: 'Book 3', author: 'Author 3' },
    { id: '4', title: 'Book 4', author: 'Author 4' }
];

router.get('/', (_, res) => {
    try {
        res.status(200).json(Books);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.get('/:id', (req, res) => {
    try {
        const book = Books.find(b => b.id === req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.post('/', (req, res) => {
    try {
        const { id, author, title } = req.body;
        if (id && author && title) {
            Books.push({ id, author, title });
            res.status(201).json({ message: 'Book created' });
        } else {
            res.status(400).json({ message: 'Invalid book' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const book = Books.filter(b => b.id === req.params.id);
        if (book.length) {
            Books = Books.filter(b => b.id !== req.params.id);
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

export default router;
