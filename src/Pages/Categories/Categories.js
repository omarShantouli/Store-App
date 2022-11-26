import React, { useEffect, useState } from 'react'
import { FetchData } from "../../Utils/ApiUtils"
import mapper from './utils/utils';
import "../Categories/Categories.scss"
import { Link } from 'react-router-dom';

export default function Categories() {

    let [categories, setCategories] = useState([]);
    async function getCategories(){
        const resp = await FetchData('https://fakestoreapi.com/products/categories', "GET")

        if(resp.status === 200){
            var myCategories = mapper(resp.data);
            setCategories(myCategories);
        }else{
            console.warn("sorry this api failed");
            //@TODO: we will handle it later
        }
    }

    useEffect(()=>{
        getCategories()
    }, [])

   // console.log(myCategories);
    return (
    <div className="product-categories">
       {
        categories?.map((category, idx)=>{
            return <div key={idx} className={"card container my-5"}>
                        <Link to="/products" state={category.label}> 
                        <img src={category.image} alt={category.name} />
                        <div className={"card-img-overlay d-flex justify-content-center align-items-center custom-img-overlay"}>
                           <h1 style={{color: "black"}}> {category.label} </h1>
                        </div>
                        </Link>
                   </div>
        })
       }
    </div>
    )
}
