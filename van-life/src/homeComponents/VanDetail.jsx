import React from "react"
import {Link, useParams, useLocation} from "react-router-dom"

export default function VanDetail(){
    const params = useParams();
    const location = useLocation();
    console.log(params)
    
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
    return (
        <div className="van-detail-page">
            <Link to={`..?${location.state?.search || ""}`}
                relative="path"
                className="van-detail-back-btn">
                &larr; <span>Back to {location.state?.type || "all"} vans</span>
            </Link>
            <div key={vansData.id} className="van-detail-card">
                <img src={vansData.imageUrl} alt={`Image of ${vansData.name}`} />
                <div className={`van-detail-type ${vansData.type}`}>
                    {vansData.type}
                </div>
                <div>
                    <h1 className="van-detail-name">
                        {vansData.name}
                    </h1>
                    <p className="van-detail-price">
                        ${vansData.price}
                        <span>/day</span>
                    </p>
                    <p className="van-detail-description">
                        {vansData.description}
                    </p>
                </div>
                <Link className="van-detail-rent-btn">
                    Rent this van
                </Link>
            </div>
        </div>
    )
}