import {Product} from "./Product.ts";
import ProductCard from "./ProductCard.tsx";

type ProductProps={
    characters:Product[]
}
export default function ProductGallery(props:ProductProps){



    return(
        <>
            {props.characters.map((product) => <ProductCard name={product.name} price={product.price}/>)}
        </>
    )
}