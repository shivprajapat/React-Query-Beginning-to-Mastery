import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const SuperHeroesPage = () => {
  const { isLoading, data } = useQuery("superheroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });
  console.log("data", data);
  return (
    <div>
      <h1>React Query Super Heroes Page</h1>
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        <>
          {data.data.map((item, i) => (
            <p key={i}>{item.name}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default SuperHeroesPage;
