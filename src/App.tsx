import './App.css'
import Welcome from "./Welcome.tsx";
import {Route, Routes} from "react-router-dom";
import Navigation from "./Navigation.tsx";
import DetailsPage from "./DetailsPage.tsx";
import {useState} from "react";
import {Product} from "./Product.ts";
import ProductGallery from "./ProductGallery.tsx";
import AddProduct from "./AddProduct.tsx";


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

    //Methode zum Aktualisieren der Produktliste
    function updateProducts(newProduct:Product){
        setProducts([...products,newProduct])
        //Hier benutzen wir den sog. spread Operator (...alterArray, neuesObjekt)
        //um einen neuen Array zu erstellen, den wir dann in den Setter übergeben
    }


  return (
    <>
        <h1>Schoko-Laden</h1>
        <Navigation/>
        <Routes>
            <Route path={"/"} element={<Welcome/>}/>
            <Route path={"/sweets"} element={<ProductGallery characters={products}/>}/>
            <Route path={"/addproduct"} element={<AddProduct addNewProduct={updateProducts}/>}/>
            <Route path={"/detail/:id"} element={<DetailsPage/>}/>
        </Routes>
    </>
  )
}

export default App
