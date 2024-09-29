import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';  
import D3ChartComponent from './D3ChartComponent';  
import axios from 'axios';  

function App() {
  // Initial chart data (static)
  const [data, setData] = useState({
    labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment'],
    values: [500, 200, 100, 150],
  });

  // D3 chart data
  const [budgetData, setBudgetData] = useState([
    { title: 'Rent', budget: 500 },
    { title: 'Groceries', budget: 200 },
    { title: 'Utilities', budget: 100 },
    { title: 'Entertainment', budget: 150 }
  ]);

  useEffect(() => {
    // Fetch data from an API (mock endpoint)
    axios.get('http://localhost:3001/budget')  // Replace this with the actual API endpoint
      .then(response => {
        const fetchedData = response.data.myBudget;

        // Prepare data for Chart.js
        const labels = fetchedData.map(item => item.title);
        const values = fetchedData.map(item => item.budget);
        setData({
          labels,
          values,
        });

        // Prepare data for D3.js
        setBudgetData(fetchedData);
      })
      .catch(error => {
        console.error("Error fetching budget data", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Personal Budget</h1>

      {/* Chart.js chart */}
      <h2>Chart.js Pie Chart</h2>
      <ChartComponent data={data} />

      {/* D3.js chart */}
      <h2>D3.js Pie Chart</h2>
      <D3ChartComponent budgetData={budgetData} />
    </div>
  );
}

export default App;
