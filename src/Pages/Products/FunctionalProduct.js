import React, { useContext, useEffect, useState } from 'react';
import { FetchData } from '../../Utils/ApiUtils';
import ProductsCard from './SubComp/ProductsCard';
import './products.scss'
import SearchFilter from './SubComp/FunctionalSearchFilter';
import { GlobalContext } from '../../Utils/context';
import ProductDetailsModal from '././SubComp/ProductDetailsModal';
import { useLocation } from 'react-router-dom';

function Products(){


    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const contextData = useContext(GlobalContext);
    const data = useLocation("");

   async function fetchPlease(){
    const resp = await FetchData('https://fakestoreapi.com/products', "GET")

    if(resp.status === 200){
        setProducts(resp.data)
        setFilteredProducts(resp.data)
    }else{
        console.warn("sorry this api failed");
        //@TODO: we will handle it later
    }
    }
     

    useEffect(()=>{
        fetchPlease()
    }, [])

    
   function onTextFilterChanged(SearchText, filterBy){
        const _filteredProducts = products.filter((item)=>{

            const upperCaseTitle = item.title.toUpperCase();
            const upperCaseDesc = item.description.toUpperCase();
            const upperCaseSearchText = SearchText.toUpperCase();

            if(filterBy === "title")
                return upperCaseTitle.includes(upperCaseSearchText);
            if(filterBy === "description")
                return upperCaseDesc.includes(upperCaseSearchText);  
            return item.title.toUpperCase().includes(SearchText) || item.description.toUpperCase().includes(upperCaseSearchText);
        })

        setFilteredProducts(_filteredProducts);
    }

    function onCardClick(product){
        contextData.showModal({
            body : <ProductDetailsModal product={product} />,
            title : <span>{product.title}</span>
        });
        
    }
    console.log(data.state);
        return(
            <div>
                
                <SearchFilter onChange={onTextFilterChanged}  />
                <div className='row ms-5 me-5'>
                    {
                        filteredProducts.map((product, idx)=>{
                            return <div className='col-lg-2 col-md-3 col-sm-6' key={idx}>
                                <ProductsCard 
                                onClick={onCardClick.bind(this, product)}
                                product={product} /> 
                                </div>
                        })
                    }
                    
                </div>
            </div>
        )
}
export default Products;