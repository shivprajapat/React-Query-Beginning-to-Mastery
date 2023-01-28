import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((response) => {
      setData(response.data);
      setIsLoading(false)
    });
  }, []);
  console.log("data", data);
  return (
    <div>
      <h1>Super Heroes Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.map((item, i) => (
            <p key={i}>{item.name}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default SuperHeroesPage;
