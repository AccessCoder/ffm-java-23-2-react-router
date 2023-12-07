import './App.css'
import Welcome from "./Welcome.tsx";
import {Route, Routes} from "react-router-dom";
import Navigation from "./Navigation.tsx";
import DetailsPage from "./DetailsPage.tsx";
import {useState} from "react";
import {Product} from "./Product.ts";
import ProductGallery from "./ProductGallery.tsx";


function App() {

    const [products, setProducts] = useState<Product[]>(
        [
            {
                name: "CaramelSunday Biscuit",
                price: 4.99
            },
            {
                name: "StrawberrySunday Biscuit",
                price: 5.99
            },
            {
                name: "Amaretto Biscuit",
                price: 2.99
            },
            {
                name: "DoubleChoc Cookie",
                price: 4.99
            },
            {
                name: "TripleChoc Cookie",
                price: 5.99
            },
            {
                name: "500g Cookie Monster Special",
                price: 12.99
            },
        ]
    )

  return (
    <>
        <h1>Schoko-Laden</h1>
        <Navigation/>
        <Routes>
            <Route path={"/"} element={<Welcome/>}/>
            <Route path={"/sweets"} element={<ProductGallery characters={products}/>}/>
            <Route path={"/detail/:id"} element={<DetailsPage/>}/>
        </Routes>
    </>
  )
}

export default App
