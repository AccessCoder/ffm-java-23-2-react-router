import {ChangeEvent, FormEvent, useState} from "react";
import {Product} from "./Product.ts";

type AddProductProps={
    //Hier typisieren wir die "updateProducts" Methode aus der app.tsx, die wir über die Props übergeben werden
    addNewProduct:(newProduct:Product) => void
}
export default function AddProduct(props:AddProductProps){

    //UseStates zum halten der Werte aus den Inputfeldern
    const [productName, setProductName] = useState<string>("")
    const [productPrice, setProductPrice] = useState<number>(0)


    function onInputName(event:ChangeEvent<HTMLInputElement>){
        setProductName(event.target.value)
    }

    function onInputPrice(event:ChangeEvent<HTMLInputElement>){
        setProductPrice(Number(event.target.value))
    }
    //Methode die beim Submit des Formulares ausgelöst werden soll WICHTIG: Das Event mitgeben!
    function createNewCookie(event:FormEvent<HTMLFormElement>){
        //Standardverhalten von HTML ist ein refresh der Seite, wenn ein Submit ausgeführt wird.
        //mit der preventDefault()-Methode aus dem Event, umgehen wir dies, damit der Input des Nutzers nicht verloren geht.
        event.preventDefault()

        //Wir bauen uns aus den einzelnen States ein Objekt zusammen
        const newCookie:Product = {name:productName, price:productPrice}

        //Zugriff auf die Methodenreferenz von "updateProducts" aus der app.tsx
        //dadurch "schieben" wir das neue Objekt "nach oben", also von dieser Unterkomponente in die app.tsx
        props.addNewProduct(newCookie)

        //Dadurch das wir das Standardverhalten von HTML abgeschaltet haben, verbleiben die Eingaben des Users
        //nach absenden des Formulares in den Inputfeldern. Wir rufen die Setter der Felder nochmal auf und setzen
        //sie wieder auf ihre Ausgangswerte zurück.
        setProductPrice(0)
        setProductName("")
    }

    return(
        <>
            <h1>Please enter a new Cookie</h1>
            <form onSubmit={createNewCookie}>
                <h3>Please enter a Product Name</h3>
                <input
                    type={"text"}
                    value={productName}
                    placeholder={"Please enter a name"}
                    onChange={onInputName}/>

                <h3>Please enter a Price for your Product </h3>
                <input
                    type={"number"}
                    value={productPrice}
                    placeholder={"Please enter a price"}
                    onChange={onInputPrice}/>

               <button>Create new Cookie</button>

            </form>
        </>
    )
}