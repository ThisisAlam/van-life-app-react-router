import React from "react"
import {
    Link,
    NavLink,
    Outlet,
    useParams
} from "react-router-dom"
import { getVan } from "../api"

export default function HostVanDetail(){
    const {id} = useParams();
    
    const [vansData, setVansData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVansData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])


    if (loading) return <h1>Loading...</h1>

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    if (!vansData) {
        return <h1>No van found</h1>
    }

    const activeStyles = {
        fontWeight: "700",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <section className="host-van-detail-page">
            <Link to=".."
                relative="path"
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