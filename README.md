# **More Dopamine - Random Hobby Suggestion App**

## **Project Description**
"More Dopamine" is a web application built with React to help users discover new and interesting hobbies when they are feeling bored or in need of inspiration. The app leverages the API Ninjas' Hobbies API to provide a curated list of hobbies categorized by interest, allowing users to choose a category and receive a random suggestion. This project solves the common problem of not knowing what to do with free time by giving users fun and educational activities to explore.

## **Problem Solved**
In today's fast-paced digital world, people often find themselves bored or lacking motivation for new activities. "More Dopamine" addresses this by offering a simple solution: a tool to suggest hobbies in categories ranging from education to sports, giving users instant ideas to stay engaged and active.

## **Features**
- Choose from a variety of categories to receive hobby suggestions.
- Access detailed information about the suggested hobby, including a direct link to a relevant Wikipedia page.
- Responsive and user-friendly interface with category-based buttons.

## **Setup Instructions**
Follow these steps to set up and run the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kyrie21323/more-dopamine.git
   cd more-dopamine
   ```

2. **Install the dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Create a .env file in the root directory of your project and add your API key:**:
   - Visit [API Ninjas](https://api-ninjas.com/) and sign up to get your free API key.
   - REACT_APP_API_KEY = 'put your own key'

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open the project in your browser**:
   Navigate to `http://localhost:3000` to see the app in action.

## **API Integration**
### **API Used**
This app integrates the [API Ninjas Hobbies API](https://api-ninjas.com/api/hobbies). The API provides a wide variety of hobby suggestions categorized by interests, such as:
- **General**
- **Sports and Outdoors**
- **Education**
- **Collection**
- **Competition**
- **Observation**

### **How It's Integrated**
The app uses the Fetch API to make HTTP GET requests to the API Ninjas endpoint:
```javascript
fetch(`https://api.api-ninjas.com/v1/hobbies?category=${category}`, {
  method: 'GET',
  headers: {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json',
  },
})
```
The user's selected category determines the type of hobby suggestion returned. Each hobby includes a name, category, and a link to more information on Wikipedia.

## **Credits for AI-Generated Code**
This project was developed with assistance from AI tools (ChatGPT) throughout the process:
- **Category Button Design**: AI provided suggestions for creating dynamic buttons for each category to enhance user interaction.
- **Styling**: AI provided guidance on CSS styles for a cleaner and more modern look.
- **Debugging**: AI provided guidance on the usage of manifest.json, where I had a problem with it while fetching data.

## **Troubleshooting**
If you run into any issues:
- Ensure your API key is correctly set in the `HobbySuggestion.js` file.
- Verify that your internet connection is stable.
- If the app fails to start, make sure all dependencies are properly installed with `npm install`.
