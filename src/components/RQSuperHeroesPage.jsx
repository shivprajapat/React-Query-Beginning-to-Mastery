import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RQSuperHeroesPage = () => {
    const fetchSuperHeroes = () => {
        return axios.get("http://localhost:4000/superheroes")
    }
    const onSuccess = () => {
        console.log('perform side effect after data is fetched');
    }

    const onError = () => {
        console.log('perform side effect after error is returned');
    }

    const { isLoading, data, isFetching, isError, error } = useQuery('super-heroes', fetchSuperHeroes, {
        onSuccess,
        onError
    })

    if (isLoading || isFetching) {
        return <h2>loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <div>

            <h1>RQ Super Heroes Page</h1>
            {data?.data.map((item, i) => (
                <p key={i}>{item.name}  <b>: {item.alterEgo} </b></p>
            ))}
        </div>
    )
}

export default RQSuperHeroesPage;
