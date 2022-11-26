import React from 'react';
import { FetchData } from '../../Utils/ApiUtils';
import ProductsCard from './SubComp/ProductsCard';
import './products.scss'
import SearchFilter from './SubComp/SearchFilter';
//import SearchFilter from './SubComp/FunctionalSearchFilter';
import CustomModal from '../../Components/CustomModal/CustomModal';
import {Modal} from 'bootstrap';
import { GlobalContext } from '../../Utils/context';
import ProductDetailsModal from '././SubComp/ProductDetailsModal';

class Products extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products : [],
            filteredProducts : [],
           // productDetails : {title : ''}
        }
    }


    async componentDidMount(){ // we fetched the data in the componentDidMount, because it excutes once (for initialization)

        const resp = await FetchData('https://fakestoreapi.com/products', "GET")

        if(resp.status === 200){
            this.setState({products : resp.data, filteredProducts : resp.data});
        }else{
            console.warn("sorry this api failed");
            //@TODO: we will handle it later
        }
        //console.log(resp);
    }

    
    onTextFilterChanged(SearchText, filterBy){
        const _filteredProducts = this.state.products.filter((item)=>{

            const upperCaseTitle = item.title.toUpperCase();
            const upperCaseDesc = item.description.toUpperCase();
            const upperCaseSearchText = SearchText.toUpperCase();

            if(filterBy === "title")
            return upperCaseTitle.includes(upperCaseSearchText);
            if(filterBy === "description")
            return upperCaseDesc.includes(upperCaseSearchText);
            return item.title.toUpperCase().includes(SearchText) || item.description.toUpperCase().includes(upperCaseSearchText);
        })

        this.setState({
            filteredProducts : _filteredProducts
        })
       // console.log(filterBy);
    }

    onCardClick(product){
       /* this.setState({
            productDetails : product
        }, () => {
            const customModal = new Modal("#customModal");
            customModal.show();
        });*/
        this.context.showModal({
            body : <ProductDetailsModal product={product} />,
            title : <span>{product.title}</span>
        });
        
    }
//<CustomModal product={this.state.productDetails} />

    render(){
        return(
            <div>
                
                <SearchFilter onChange={this.onTextFilterChanged.bind(this)}  />
                <div className='row ms-5 me-5'>
                    {
                        this.state.filteredProducts.map((product, idx)=>{
                            return <div className='col-lg-2 col-md-3 col-sm-6' key={idx}>
                                <ProductsCard 
                                onClick={this.onCardClick.bind(this, product)}
                                product={product} /> 
                                </div>
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

Products.contextType = GlobalContext;
export default Products;