import React, { useState, useEffect } from 'react';

const HobbySuggestion = () => {
  const [hobby, setHobby] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const categories = [
    'general',
    'sports_and_outdoors',
    'education',
    'collection',
    'competition',
    'observation',
  ]; // Available categories

  // Function to fetch a random hobby based on category
  const fetchRandomHobby = (category) => {
    setLoading(true);

    console.log(`Fetching hobby from category: ${category}`); // Check which category is being fetched

    fetch(`https://api.api-ninjas.com/v1/hobbies?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log("API Response Status:", response.status); // Log the response status
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("API Data Received:", data); // Check the received data
        if (data && typeof data === 'object' && data.hobby) {
          setHobby(data);
        } else {
          setHobby(null);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching hobby:', error); // Log if there's an error
        setLoading(false);
      });
  };

  // Rendering the category buttons
  return (
    <div className="hobby-container">
      <h2>Suggested Hobby</h2>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => fetchRandomHobby(category)}
            className="category-button"
          >
            {category.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Display loading or fetched hobby */}
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        hobby ? (
          <div className="hobby-details">
            <p><strong>Hobby:</strong> {hobby.hobby}</p>
            <p><strong>Category:</strong> {hobby.category}</p>
            <a href={hobby.link} target="_blank" rel="noopener noreferrer">
              Learn More on Wikipedia
            </a>
          </div>
        ) : (
          <p>No hobby available. Please select a category!</p>
        )
      )}
    </div>
  );
};

export default HobbySuggestion;
