import { useOutletContext } from "react-router-dom"

export default function VanPhotos(){
    const {currentVan} = useOutletContext()

    return (
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}