import React, {useEffect, useState} from "react";
import Items from "./Items"
import Comments from './Comments'
//import "xp.css/dist/XP.css";

function Listings() {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch('/api/items')
        .then(res => res.json())
        .then(data => setProducts(data))
        }, [])
    
    console.log(products)

    const mappedProducts = products.map(p => <Items key={p.id} product={p}/>)

    return (
        <h2>Listings
            <br></br>
            <br></br>
            <div className="content-container">
                {mappedProducts}
                    <Comments />
            </div>
        </h2>
    )
}

export default Listings