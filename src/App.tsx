import './App.css'
import Welcome from "./Welcome.tsx";
import ChocolateAssortment from "./ChocolateAssortment.tsx";
import BiscuitAssortment from "./BiscuitAssortment.tsx";
import {Route, Routes} from "react-router-dom";
import Navigation from "./Navigation.tsx";
import DetailsPage from "./DetailsPage.tsx";


function App() {


  return (
    <>
        <h1>Schoko-Laden</h1>
        <Navigation/>
        <Routes>
            <Route path={"/"} element={<Welcome/>}/>
            <Route path={"/choc"} element={<ChocolateAssortment/>}/>
            <Route path={"/bisc"} element={<BiscuitAssortment/>}/>
            <Route path={"/detail/:id"} element={<DetailsPage/>}/>
        </Routes>
    </>
  )
}

export default App
