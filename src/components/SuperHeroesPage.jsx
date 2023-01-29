import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}
const SuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery("query-superheroes",
    fetchSuperHeroes,
    {
      refetchInterval: 2000,
      refetchIntervalInBackground: true
    }
  );

  console.log({ isLoading, isFetching });
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
        <p key={i}>{item.name}  <b>: {item.alterEgo} </b></p>
      ))}
    </div>
  );
};

export default SuperHeroesPage;
