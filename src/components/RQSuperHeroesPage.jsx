import React from "react";
import { Link } from "react-router-dom";
import { useSuperHerosData } from "../hooks/useSuperHerosData";

const RQSuperHeroesPage = () => {

    const onSuccess = () => {
        console.log('perform side effect after data is fetched');
    }

    const onError = () => {
        console.log('perform side effect after error is returned');
    }

    const { isLoading, data, isFetching, isError, error } = useSuperHerosData(onError, onSuccess)

    if (isLoading || isFetching) {
        return <h2>loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <div>

            <h1>RQ Super Heroes Page</h1>
            {/* {data?.data.map((item, i) => (
                <p key={i}>{item.name}  <b>: {item.alterEgo} </b></p>
            ))} */}
            {data?.data.map(hero => {
                return (
                    <div key={hero.id} style={{marginBottom:5}}>
                        <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default RQSuperHeroesPage;
