import React from "react"
import {Link, NavLink} from "react-router-dom"
import { getHostVans } from "../api"

export default function HostVans(){
    const [vansData, setVansData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVansData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

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

    if (error) {
        return <h1>There was an error: {error.message}</h1>
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

    