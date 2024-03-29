import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
export default function Van(){
    const params = useParams();
    const location = useLocation();
    console.log(location.state);
    
    const [van, setVan] = useState(null)
    useEffect(function(){
        fetch(`/api/vans/${params.id}`)
            .then((res) => res.json())
            .then((data)=> setVan(data.vans))
    }, [params.id])
    // if params.id changes, then run effect again

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return(
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}