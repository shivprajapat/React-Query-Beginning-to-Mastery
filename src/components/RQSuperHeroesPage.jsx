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
        onError,
        select:(data)=>{
            const superHeros = data.data.map(hero => hero.name);
            return superHeros;
        }
    })

    if (isLoading || isFetching) {
        return <h2>loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    console.log('%c shiv console value ✅ !! ', 'background: #4705dc; color: #fff',data);
    
    return (
        <div>

            <h1>RQ Super Heroes Page</h1>
            {/* {data?.data.map((item, i) => (
                <p key={i}>{item.name}  <b>: {item.alterEgo} </b></p>
            ))} */}
            {
                data.map((item,i) => <h2 key={i}>{item}</h2>)
            }
        </div>
    )
}

export default RQSuperHeroesPage;
