import React, { useState, useEffect } from 'react';

const HobbySuggestion = () => {
  const [hobby, setHobby] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your API key from API Ninjas

  const fetchRandomHobby = () => {
    setLoading(true);

    fetch('https://api.api-ninjas.com/v1/hobbies?category=general', {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setHobby(data[0]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching hobby:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomHobby();
  }, []);

  return (
    <div>
      <h2>Suggested Hobby</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        hobby && (
          <>
            <p><strong>Hobby:</strong> {hobby.hobby}</p>
            <p><strong>Category:</strong> {hobby.category}</p>
            <a href={hobby.link} target="_blank" rel="noopener noreferrer">
              Learn More on Wikipedia
            </a>
            <button onClick={fetchRandomHobby}>Get Another Hobby</button>
          </>
        )
      )}
    </div>
  );
};

export default HobbySuggestion;
