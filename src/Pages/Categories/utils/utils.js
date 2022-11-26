function mapper(categories){

    let res = categories.map((category)=>{
        return {
            name : category,
            image : `/images/${category}.png`,
            label : category.toUpperCase()
        }
    })


    // OR

    // let res = categories.map((category)=>{

    //     if(category === 'electronics')
    //     return {
    //         title : "electronics",
    //         image : "/images/electronics.png"
    //     }
    //     if(category === 'jewelery')
    //     return {
    //         title : "jewelery",
    //         image : "/images/jewelery.png"
    //     }
    //     if(category === "men's clothing")
    //     return {
    //         title : "men's clothing",
    //         image : "/images/men's clothing.png"
    //     }
    //     if(category === "women's clothing")
    //     return {
    //         title : "women's clothing",
    //         image : "/images/women's clothing.png"
    //     }

    // })
    

    return res;
    
}
export default mapper;