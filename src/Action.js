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
};

export const removeFromBasket = (id)=>{
    return {
        type: "REMOVE_FROM_BASKET",
        id:id
    }
};


export const setUser = (authUser)=>{
    return {
        type:'SET_USER',
        user:authUser
    }
} 

export const emptyBasket = ()=>{
    return {
        type:'EMPTY_BASKET'
    }
}