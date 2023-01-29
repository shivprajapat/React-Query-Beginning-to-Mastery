import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}
const SuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("query-superheroes",
    fetchSuperHeroes,
    {
      enabled: false
    }
  );

  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h1>React Query Super Heroes Page</h1>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((item, i) => (
        <p key={i}>{item.name}  <b>: {item.alterEgo} </b></p>
      ))}
    </div>
  );
};

export default SuperHeroesPage;
