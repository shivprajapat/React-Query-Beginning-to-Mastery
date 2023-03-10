import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueries = () => {
  const {
    data: superHeroes,
    isLoading,
    isError,
    error,
  } = useQuery("super-heroes", fetchSuperHeroes);
  const {
    data: friends,
    isLoading: friendLoading,
    isError: friendIsError,
    error: friendError,
  } = useQuery("friends", fetchFriends);
  console.log({ superHeroes, friends });

  if (isLoading || friendLoading) {
    return <h2>loading...</h2>;
  }
  if (isError || friendIsError) {
    return <h2>{error.message || friendError.message}</h2>;
  }
  return (
    <div>
      <h1>Parallel Queries</h1>
      <article>
        <h2>SuperHeros</h2>
        {superHeroes.data?.map((item, i) => {
          return (
            <div key={i} style={{ marginBottom: 5 }}>
              {item.name}
            </div>
          );
        })}
      </article>
      <article>
        <h2>Friends</h2>
        {friends.data?.map((item, i) => {
          return (
            <div key={i} style={{ marginBottom: 5 }}>
              {item.name}
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default ParallelQueries;
