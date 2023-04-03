const addToDB = id =>{

    const isExist = localStorage.getItem('shopping_cart')
    let shopping_cart ={}
    if(!isExist){
        shopping_cart[id] = 1
    }
    else{
        shopping_cart = JSON.parse(isExist);
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else{
            shopping_cart[id] = 1
        }
    }
    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))

}
const clearCart = () =>{
    localStorage.removeItem('shopping_cart');
}

const removeFromDB = id =>{
    let storedCart = localStorage.getItem('shopping_cart')
    if(storedCart){
        storedCart = JSON.parse(storedCart);
        if(id in storedCart){
            delete storedCart[id]
        }
        localStorage.setItem('shopping_cart', JSON.stringify(storedCart));
    }
    
}
const getStoredCart = () => {
    let shoppinCart = {};
    const storedCart = localStorage.getItem('shopping_cart');
    if(storedCart){
        shoppinCart = JSON.parse(storedCart)
    }
   return shoppinCart;

}

export  {
    addToDB,
    getStoredCart,
    clearCart,
    removeFromDB,
    
};