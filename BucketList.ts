import React, { useState } from 'react';

const BucketList = () => {
  const [formData, setFormData] = useState({
    country: '',
    item: '',
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { country, value } = e.target;
    setFormData({
      ...formData,
      [country]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};

    // Check for empty fields
    if (!formData.country.trim()) tempErrors.country = 'Country is required.';
    if (!formData.item.trim()) tempErrors.item = 'Please provide one item.';

   
    setErrors(tempErrors);

    // Submit if no errors. 
    if (Object.keys(tempErrors).length === 0) {
      setSubmittedData(formData);
      alert('Your Item has been Stored!');
      setFormData({ country: '', item: '' });
      setErrors({});
    }
  };

  return (
    <section className="contactForm">
    <div>
      <h1>Bucket List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <p className="error">{errors.country}</p>}
        </div>

        <div>
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            id="item"
            name="item"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.item && <p className="error">{errors.item}</p>}
        </div>

        <button type="submit">Send</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information:</h2>
          <p><strong>Country:</strong> {submittedData.country}</p>
          <p><strong>Item:</strong> {submittedData.item}</p>
        </div>
      )}
    </div>
    </section>
  );
};

export default BucketList;
