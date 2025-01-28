import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bucketListImage from "../assets/images/bucketlist.jpeg";
import "../styles/BucketList.css";

const BucketList: React.FC = () => {
  const [formData, setFormData] = useState<{ country: string; item: string }>({
    country: "",
    item: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{ country: string; item: string } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [bucketList, setBucketList] = useState<Array<{ id: number; country: string; item: string }>>([]);

  // Check if the user is logged in by looking for a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Fetch existing bucket list items from the backend
  useEffect(() => {
    if (isLoggedIn) {
      const fetchBucketList = async () => {
        try {
          const token = localStorage.getItem("authToken");
          const response = await fetch("http://your-backend-url/api/bucketlist", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Error fetching bucket list: ${response.statusText}`);
          }

          const data = await response.json();
          setBucketList(data);
        } catch (error) {
          console.error("Error fetching bucket list:", error);
        }
      };

      fetchBucketList();
    }
  }, [isLoggedIn]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: Record<string, string> = {};

    // Validate input fields
    if (!formData.country.trim()) tempErrors.country = "Country is required.";
    if (!formData.item.trim()) tempErrors.item = "Please provide one item.";
    setErrors(tempErrors);

    // If no errors, submit the data to the backend
    if (Object.keys(tempErrors).length === 0) {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch("http://your-backend-url/api/bucketlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`Error submitting bucket list item: ${response.statusText}`);
        }

        const newItem = await response.json();
        setBucketList((prevList) => [...prevList, newItem]);
        setSubmittedData(newItem); // Store the last submitted data
        setFormData({ country: "", item: "" });
      } catch (error) {
        console.error("Error submitting bucket list item:", error);
      }
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;
    
    try {
      const token = localStorage.getItem("authToken");
  
      // Send DELETE request to the backend
      const response = await fetch(`./api/bucketlist/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error deleting bucket list item: ${response.statusText}`);
      }
  
      const deletedItem = await response.json();
      console.log("Deleted item:", deletedItem);
  
      // Remove the item from the state (frontend)
      setBucketList((prevList) => prevList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting bucket list item:", error);
    }
  };

  return (
    <section className="country">
      <div className="country-container">
        <img src={bucketListImage} alt="bucketlist" className="country-image" />
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
                  <h2>Last Submitted Item:</h2>
                  <p>
                    <strong>Country:</strong> {submittedData.country}
                  </p>
                  <p>
                    <strong>Item:</strong> {submittedData.item}
                  </p>
                </div>
              )}

              <h2>Your Bucket List</h2>
              <table className="bucketlist-table">
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Item</th>
                  </tr>
                </thead>
                <tbody>
                  {bucketList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.country}</td>
                      <td>{item.item}</td>
                      <td>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BucketList;
