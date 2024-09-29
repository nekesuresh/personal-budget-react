import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import axios from 'axios';

function App() {
  const [data, setData] = useState({
    labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment'],
    values: [500, 200, 100, 150],
  });

  useEffect(() => {
    axios.get('/budget.json')
      .then(response => {
        const fetchedData = response.data.myBudget;
        const labels = fetchedData.map(item => item.title);
        const values = fetchedData.map(item => item.budget);

        setData({
          labels,
          values,
        });
      })
      .catch(error => {
        console.error("Error fetching budget data", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Personal Budget</h1>
      <ChartComponent data={data} />
    </div>
  );
}

export default App;
