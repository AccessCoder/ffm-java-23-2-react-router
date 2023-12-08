import {Product} from "./Product.ts";


export default function ProductCard(props:Product){

    return(
        <div className={"product"}>
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
        </div>
    )
}