async function  productListData () {
  
    try { 
       const response  =  await fetch('https://fakestoreapi.com/products')
       const data = await response.json()
       return data               
        
    } catch (error) {
        return error
    }
};

export const products = await productListData ()