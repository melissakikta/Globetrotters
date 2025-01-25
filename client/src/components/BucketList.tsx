import React, { useState } from 'react';
import { FormErrors, FormData } from '../interfaces/Form';

const BucketList: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    country: '',
    item: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    id: 0,
    country: '',
    item: '',
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tempErrors: FormErrors = { id: 0, country: '', item: '' };

    // Validate fields
    if (!formData.country.trim()) {
      tempErrors.country = 'Country is required.';
    }
    if (!formData.item.trim()) {
      tempErrors.item = 'Please provide one item.';
    }

    setErrors(tempErrors);

    // Submit if no errors exist
    if (!tempErrors.country && !tempErrors.item) {
      setSubmittedData(formData);
      alert('Your Item has been Stored!');
      setFormData({ id: 0, country: '', item: '' });
      setErrors({ id: 0, country: '', item: '' });
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
              value={formData.item}
              onChange={handleChange}
            />
            {errors.item && <p className="error">{errors.item}</p>}
          </div>

          <button type="submit">Send</button>
        </form>

        {submittedData && (
          <div className="submitted-data">
            <h2>Submitted Information:</h2>
            <p>
              <strong>Country:</strong> {submittedData.country}
            </p>
            <p>
              <strong>Item:</strong> {submittedData.item}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BucketList;

