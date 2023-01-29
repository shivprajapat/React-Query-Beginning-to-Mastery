import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((response) => {
      setData(response.data);
      setIsLoading(false);
    }).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);
  console.log("data", data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h1>Super Heroes Page</h1>
      {data.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
};

export default SuperHeroesPage;
