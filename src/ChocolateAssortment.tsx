import {Link} from "react-router-dom";

export default function ChocolateAssortment(){


    return(
        <>
            <h2>Our Chocolate Assortment</h2>
            <p> <Link to={"/detail/2"}>DoubleChoc Cookie </Link></p>
            <p>TripleChoc Cookie</p>
            <p>500g Cookie Monster Special</p>
        </>
    )
}