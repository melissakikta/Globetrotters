import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bucketListImage from '../../assets/images/bucketlist.jpeg'; // Corrected image import

const BucketList: React.FC = () => {
  const [formData, setFormData] = useState({
    country: "",
    item: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Track if user is logged in

  // Check if the user is logged in by looking for a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let tempErrors: any = {};

    // Check for empty fields
    if (!formData.country.trim()) tempErrors.country = "Country is required.";
    if (!formData.item.trim()) tempErrors.item = "Please provide one item.";

    setErrors(tempErrors);

    // Submit if no errors
    if (Object.keys(tempErrors).length === 0) {
      setSubmittedData(formData);
      alert("Your Item has been Stored!");
      setFormData({ country: "", item: "" });
      setErrors({});
    }
  };

  return (
    <section className="country">
      <div className="country-container">
        <img
          src={bucketListImage}
          alt="bucketlist"
          className="country-image"
        />
        <div className="country-text">
          <h1>Bucketlist</h1>
          <p>
            Where do you want to go? What do you want to see? Let's make a list
            to keep it all straight!
          </p>
          {!isLoggedIn ? (
            <div>
              <p>Register or login to access your bucket list.</p>
              <Link to="/register">
                <button>Register</button>
              </Link>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          ) : (
            <div>
              <h2>Add an Item to Your Bucket List</h2>
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

                <button type="submit">Add to Bucket List</button>
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
          )}
        </div>
      </div>
    </section>
  );
};

export default BucketList;