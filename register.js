fetch('http://20.244.56.144/test/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     companyName: "Mahindra University",
        ownerName: "RoopaVarshitha",
        rollNo: "SE21UCSE171",
        ownerEmail: "roopavarshitha30@gmail.com",
        accessCode: "CTxqiG"
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  