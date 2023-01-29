import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const SuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery("superheroes", () => {
    return axios.get("http://localhost:4000/superheroe");
  });

  console.log("data", data);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h1>React Query Super Heroes Page</h1>
      {data.data.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
};

export default SuperHeroesPage;
