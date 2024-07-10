import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [numberId, setNumberId] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState('');

  const handleFetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberId}`);
      setResponseData(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Average Calculator Frontend</h1>
        <div className="flex items-center space-x-2 mb-4">
          <label htmlFor="numberId" className="font-semibold">Number ID (p, f, e, etc.):</label>
          <input
            type="text"
            id="numberId"
            value={numberId}
            onChange={(e) => setNumberId(e.target.value)}
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleFetchData}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Fetch Data
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {responseData && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Previous State:</h2>
            <p className="mb-4">{JSON.stringify(responseData.windowPrevState)}</p>
            <h2 className="text-xl font-semibold mb-2">Current State:</h2>
            <p className="mb-4">{JSON.stringify(responseData.windowCurrState)}</p>
            <h2 className="text-xl font-semibold mb-2">Numbers from Server:</h2>
            <p className="mb-4">{JSON.stringify(responseData.numbers)}</p>
            <h2 className="text-xl font-semibold mb-2">Average:</h2>
            <p>{responseData.avg}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
