import React from "react"
import {
    Link,
    NavLink,
    Outlet,
    useParams
} from "react-router-dom"

export default function HostVanDetail(){
    const params = useParams();
    
    const [vansData, setVansData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(()=>{
        setLoading(true)
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>{
            setVansData(data.vans)
            setLoading(false)
        })
    },[params.id])

    if (loading) { return <h1>Loading...</h1> }
    if (!vansData) { return <h1>No van found</h1> }
    
    const activeStyles = {
        fontWeight: "700",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <section className="host-van-detail-page">
            <Link to="/host/vans"
                className="host-van-detail-back-btn"
            >&larr; <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail-container">
                <div className="host-van-detail-top">
                    <img
                        src={vansData.imageUrl}
                        alt={`Image of ${vansData.name}`}
                    />
                    <div className="host-van-detail-info">
                        <div className={`van-detail-type ${vansData.type}`}>
                            {vansData.type}
                        </div>
                        <h1>{vansData.name}</h1>
                        <p>
                            <span>${vansData.price}</span>/day
                        </p>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink end to="."
                        style={({ isActive }) =>
                            isActive ? activeStyles : null
                        }
                    >Details</NavLink>
                    <NavLink to="pricing"
                        style={({ isActive }) =>
                            isActive ? activeStyles : null
                        }
                    >Pricing</NavLink>
                    <NavLink to="photos"
                        style={({ isActive }) =>
                            isActive ? activeStyles : null
                        }
                    >Photos</NavLink>
                </nav>
                <Outlet context={{ vansData }} />
            </div>
        </section>
    )
}