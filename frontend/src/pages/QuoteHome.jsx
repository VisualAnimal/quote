import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await axios.get('chai.nfiii.cn:5555/quote');
        setQuotes(response.data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    }

    fetchQuotes();
  }, []);

  return (
    <div>
      <h2>Quote List</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Version</th>
            <th>Capacity</th>
            <th>Color</th>
            <th>Price</th>
            <th>Description</th>
            <th>Product Number</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(quote => (
            <tr key={quote._id}>
              <td>{quote.productName}</td>
              <td>{quote.version}</td>
              <td>{quote.capacity}</td>
              <td>{quote.color}</td>
              <td>{quote.price}</td>
              <td>{quote.description}</td>
              <td>{quote.productNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuoteList;
