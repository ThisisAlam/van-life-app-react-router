import React from "react"
import {Link, NavLink} from "react-router-dom"

export default function HostVans(){
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
    const HostVanElements = vansData.map(van => (
        <div className="host-van-tile" key={van.id}>
            <NavLink
                to={`/host/vans/${van.id}`}
                style={{ textDecoration: "none", color: "black" }}
            >
                <img
                    src={van.imageUrl}
                    alt={`Image of ${van.name}`}
                />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </NavLink>
        </div>
    ))
    if (loading) {
        return <h1>Loading...</h1>
    }

    return(
        <>
        <section className="host-vans-page">
            <h1 className="host-vans-title">
                Your listed vans
            </h1>
            <div className="host-vans-list">
                {HostVanElements}
            </div>
        </section>
        </>
    )
}

    