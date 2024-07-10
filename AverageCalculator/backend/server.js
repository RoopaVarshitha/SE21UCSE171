const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;

let storedNumbers = [];

app.use(express.json());

app.get('/numbers/:numberid', async (req, res) => {
  const { numberid } = req.params;

  try {
    const response = await fetchNumbersFromThirdParty(numberid);
    updateStoredNumbers(response);

    let average = null;
    if (storedNumbers.length >= WINDOW_SIZE) {
      const windowNumbers = storedNumbers.slice(-WINDOW_SIZE);
      const sum = windowNumbers.reduce((acc, num) => acc + num, 0);
      average = (sum / WINDOW_SIZE).toFixed(2);
    }

    const responseObj = {
      windowPrevState: storedNumbers.length > WINDOW_SIZE ? storedNumbers.slice(0, storedNumbers.length - WINDOW_SIZE) : [],
      windowCurrState: storedNumbers.slice(-WINDOW_SIZE),
      numbers: response,
      avg: average !== null ? `avg: ${average}` : null,
    };

    res.json(responseObj);
  } catch (error) {
    console.error('Error fetching numbers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function fetchNumbersFromThirdParty(numberid) {
  const response = await axios.get(`http://example.com/api/numbers/${numberid}`);
  return response.data.numbers;
}

function updateStoredNumbers(newNumbers) {
  newNumbers.forEach(num => {
    if (!storedNumbers.includes(num)) {
      storedNumbers.push(num);
      if (storedNumbers.length > WINDOW_SIZE) {
        storedNumbers.shift();
      }
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
