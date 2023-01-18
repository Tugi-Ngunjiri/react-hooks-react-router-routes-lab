import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import { QueryClient, QueryClientProvider } from "react-query";
 
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

{
 const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(`http://localhost:3000`)
      .then(response => response.json())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${error}
import useFetch from "react-fetch-hook";}`)
      });
  }, []);
 
  return (
    <>
      <div className="App">
        {loading && <p>Loading...</p>}
        {!loading && <p>Fetched data</p>}
      </div>
    </>
  )
}

const { isLoading, data, error } = useFetch("http://localhost:3000");
 
  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    )
  }
 
  if (!isLoading) {
    console.log(data);
  }
 
 
  return (
    <>
      <div className="App">
        {isLoading && <p>Loading...</p>}
        {!isLoading && <p>Fetched data</p>}
      </div>
    </>
  )




function App() {
  return <div>{/*{code here}*/}</div>;
}

export default App;
