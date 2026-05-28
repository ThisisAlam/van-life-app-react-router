import React from "react"

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
            <img src={van.imageUrl} alt={van.name} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p className="van-price">
                    ${van.price}
                    <span>/day</span>
                </p>
            </div>
            <i className={`van-type ${van.type}`}>
                {van.type}
            </i>
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