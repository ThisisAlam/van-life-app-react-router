import React from "react"
import {Link} from "react-router-dom"

export default function Vans(){
    const [vansData, setVansData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    React.useEffect(()=>{
        setLoading(true)
        fetch("/api/vans")
        .then(res=>res.json())
        .then(data=>{
            setVansData(data.vans)
            setLoading(false)
        })
    },[])
    const vanElements = vansData.map(van => (
        <div className="van-tile" key={van.id}>
            <Link to={`/vans/${van.id}`} 
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
    if (loading) {
        return <h1>Loading...</h1>
    }
    return(
        <>
        <div className="van-page-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
        </>
    )
}