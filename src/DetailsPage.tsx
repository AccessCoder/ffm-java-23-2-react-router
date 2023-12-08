import {useParams} from "react-router-dom";

export default function DetailsPage(){

    const id:string|undefined = useParams().id


    return(
        <>
            <h2>Details for ID: {id}</h2>
        </>
    )
}