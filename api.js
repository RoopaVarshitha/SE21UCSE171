import fetch from 'node-fetch';

// Function to fetch data using the Authorization Token
async function fetchDataWithToken(authToken) {
  try {
    const response = await fetch('http://example.com/api/resource', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Data:', data);
    return data; // Optionally return the data for further processing
  } catch (error) {
    console.error('Error:', error.message);
    throw error; // Optionally handle or rethrow the error
  }
}

// Usage example: Replace 'your_actual_token_here' with your real token
const authToken = 'your_actual_token_here';
fetchDataWithToken(authToken)
  .then(data => {
    // Handle data if needed
  })
  .catch(error => {
    // Handle errors if needed
  });
