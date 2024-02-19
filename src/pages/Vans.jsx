import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
export default function Van(){
    const [vans, setVans] = useState([])
    useEffect(function(){
        fetch('/api/vans')
        .then((response) => response.json())
        .then((data) => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van=>(
        <div className="van-tile" key={van.id} >
            <Link 
                to={`/vans/${van.id}`} 
                aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
            >
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vans ? vanElements : <h2>Loading...</h2>}
            </div>
        </div>
    )
}