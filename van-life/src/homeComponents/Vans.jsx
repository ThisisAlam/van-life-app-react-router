import React from "react"
import {Link, NavLink} from "react-router-dom"
import { useSearchParams } from "react-router";
import { getVans } from "../api.js"

export default function Vans(){
    const [vansData, setVansData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVansData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])
    
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    console.log(typeFilter)

    const displayVans = typeFilter
        ? vansData.filter(van=>van.type===typeFilter)
        : vansData
    
        const vanElements = displayVans.map(van => (
        <div className="van-tile" key={van.id}>
            <Link to={`/vans/${van.id}`} 
                state={{
                    search: `${searchParams.toString()}`,
                    type: typeFilter
                }}
                className="vans-links"
                aria-label={`View details for ${van.name}, 
                            priced at $${van.price} per day`}
            >
                <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                <div className="van-info">
                    <p>{van.name}</p>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    if (loading) { return <h1 aria-live="polite">Loading...</h1> }
    
    if (!vansData) { return <h1>No van found</h1> }
    
    if (error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>
    }

    function handleFilterChange(key,value){
        setSearchParams(prevParams=>{
            if(value===null){
                prevParams.delete(key)
            } else {
                prevParams.set(key,value)
            } return prevParams
        })
    }

    return(
        <>
        <div className="van-page-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={()=>handleFilterChange("type", "simple")} 
                    className={`van-type simple 
                        ${typeFilter==="simple"
                            ?"selected"
                            :""
                        }
                    `} 
                >Simple</button>
                <button
                    onClick={()=>handleFilterChange("type", "luxury")} 
                    className={`van-type luxury 
                        ${typeFilter==="luxury"
                            ?"selected"
                            :""
                        }
                    `}
                >Luxury</button>
                <button
                    onClick={()=>handleFilterChange("type", "rugged")} 
                    className={`van-type rugged 
                        ${typeFilter==="rugged"
                            ?"selected"
                            :""
                        }
                    `}
                >Rugged</button>
                {typeFilter
                    ?(
                    <button
                        onClick={()=>setSearchParams("")} 
                        className="van-type clear-filters"
                    >Clear filter</button>
                    )
                    :(
                        null
                    )
                }
            
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
        </>
    )
}