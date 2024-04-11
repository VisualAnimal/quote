import React, { useState } from 'react';
import axios from 'axios';

function AddQuoteForm() {
  const [formData, setFormData] = useState({
    productName: '',
    version: '',
    capacity: '',
    color: '',
    price: '',
    description: '',
    productNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://chai.nfiii.cn:5555/quote', formData);
      alert('Quote added successfully!');
      // Optionally, you can reset the form fields after successful submission
      setFormData({
        productName: '',
        version: '',
        capacity: '',
        color: '',
        price: '',
        description: '',
        productNumber: ''
      });
    } catch (error) {
      console.error('Error adding quote:', error);
      alert('Error adding quote. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Add Quote</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label><br />
        <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} required /><br />
        <label htmlFor="version">Version:</label><br />
        <input type="text" id="version" name="version" value={formData.version} onChange={handleChange} required /><br />
        <label htmlFor="capacity">Capacity:</label><br />
        <input type="text" id="capacity" name="capacity" value={formData.capacity} onChange={handleChange} required /><br />
        <label htmlFor="color">Color:</label><br />
        <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} required /><br />
        <label htmlFor="price">Price:</label><br />
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required /><br />
        <label htmlFor="description">Description:</label><br />
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required /><br />
        <label htmlFor="productNumber">Product Number:</label><br />
        <input type="text" id="productNumber" name="productNumber" value={formData.productNumber} onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddQuoteForm;
