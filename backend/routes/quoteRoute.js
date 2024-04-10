import express from 'express';
import Quote from '../models/quoteModel.js';

const router = express.Router();

// GET all quotes
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific quote
router.get('/:id', async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) {
      return res.status(404).json({ message: 'Cannot find quote' });
    }
    res.json(quote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new quote
router.post('/', async (req, res) => {
  const quote = new Quote({
    productName: req.body.productName,
    version: req.body.version,
    capacity: req.body.capacity,
    color: req.body.color,
    price: req.body.price,
    description: req.body.description,
    productNumber: req.body.productNumber
  });

  try {
    const newQuote = await quote.save();
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH update a quote
router.patch('/:id', async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) {
      return res.status(404).json({ message: 'Cannot find quote' });
    }
    if (req.body.productName != null) {
      quote.productName = req.body.productName;
    }
    if (req.body.version != null) {
      quote.version = req.body.version;
    }
    if (req.body.capacity != null) {
      quote.capacity = req.body.capacity;
    }
    if (req.body.color != null) {
      quote.color = req.body.color;
    }
    if (req.body.price != null) {
      quote.price = req.body.price;
    }
    if (req.body.description != null) {
      quote.description = req.body.description;
    }
    if (req.body.productNumber != null) {
      quote.productNumber = req.body.productNumber;
    }
    const updatedQuote = await quote.save();
    res.json(updatedQuote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a quote
router.delete('/:id', async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) {
      return res.status(404).json({ message: 'Cannot find quote' });
    }
    await quote.remove();
    res.json({ message: 'Deleted quote' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
