fetch('http://20.244.56.144/test/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      companyName: "Mahindra University",
      clientID: "3c3d4c6a-9a38-4abb-b58a-3b8afb61fe22",
      clientSecret: "plbHtIPhZdOHuEoF",
      ownerName: "RoopaVarshitha",
      ownerEmail: "roopavarshitha30@gmail.com",
      rollNo: "SE21UCSE171"
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Authorization Token:', data.access_token);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  