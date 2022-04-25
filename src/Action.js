export const addToBasketAction=(id,title,price,image,rating,type)=>{
    return {
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            price:price,
            rating:rating,
            image:image,
            title:title,
            type:type,
            date: new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString()
        }
    }
}