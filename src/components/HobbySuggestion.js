import React, { useState, useEffect } from 'react';
const HobbySuggestion = () => {
  //store fetched hobby data
  const [hobby, setHobby] = useState(null);
  //handle loading status
  const [loading, setLoading] = useState(false);
  //API key stored in .env file for security
  const API_KEY = process.env.REACT_APP_API_KEY;
  //available hobby categories
  const categories=[
    'general',
    'sports_and_outdoors',
    'education',
    'collection',
    'competition',
    'observation',
  ];

  //function to fetch random hobby based on the selected category
  const fetchRandomHobby = (category)=>{
    //loading state is true while fetching
    setLoading(true);
    //debugging
    //console.log(`Fetching hobby from category: ${category}`);
    //fetch data from the API based on the selected category
    fetch(`https://api.api-ninjas.com/v1/hobbies?category=${category}`,{
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then(data =>{        
        //check if valid data is received and set the hobby state
        if(data && typeof data === 'object' && data.hobby){
          setHobby(data);
        }else{
          //set hobby to null if not
          setHobby(null);
        }
        //set loading state to false after data is processed
        setLoading(false);
      })
      .catch(error =>{
        //debugging purposes for error while fetching
        console.error('Error fetching hobby:', error);
        //set loading state to false if an error occurs
        setLoading(false);
      });
  };

  //make category buttons and hobby details for display
  return(
    <div className="hobby-container">
      {/*header*/}
      <h2>Suggested Hobby</h2>
      {/*buttons for each category*/}
      <div className="category-buttons">
        {categories.map((category)=>(
          <button
            key={category}      //create unique key for each button
            onClick={()=>fetchRandomHobby(category)}    //set to the specific hobby when clicked
            className="category-button"
          >
            {/*display category name with underscores*/}
            {category.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/*display 'loading...' or hobby details based on state*/}
      {loading?(
        //show loading text while data is being fetched
        <p className="loading">Loading...</p>
      ):(
        hobby ? (
          //display hobby details
          <div className="hobby-details">
            <p><strong>Hobby:</strong> {hobby.hobby}</p>
            <p><strong>Category:</strong> {hobby.category}</p>
            <a href={hobby.link} target="_blank" rel="noopener noreferrer">
              Learn More on Wikipedia
            </a>
          </div>
        ) : (
          //display as below if hobby is not available
          <p>No hobby available. Please select a category!</p>
        )
      )}
    </div>
  );
};
export default HobbySuggestion;