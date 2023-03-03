const BASE_URL = "https://shooping-cart-e9d4b-default-rtdb.firebaseio.com/kodemarket/products"

export default {
    //POST
    createProduct: async (productData) => {
        let result = await fetch(`${BASE_URL}/.json`, {
            method: "POST",
            headers: {
                "Content-Type": "applicattion/json" 
            },
            body: JSON.stringify(productData)
        })
        return await result.json()
    },
    //GET
    getAllProducts: async () =>{
        let result = await fetch(`${BASE_URL}/.json`)
        return await result.json()
    },
    //GET by Id
    getProductById: async (productId) =>{
        let result = await fetch(`${BASE_URL}/${productId}/.json`)
        return await result.json()
    },
    //PATCH by Id
    updateProduct: async (productData, productId) => {
        let result = await fetch(`${BASE_URL}/${productId}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "applicattion/json" 
            },
            body: JSON.stringify(productData)
        })
        return await result.json()
    },
    //Delete by Id
    async deleteProductById(productId){
        let result = await fetch (`${BASE_URL}/products/${productId}.json`,{
            method:"DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await result.json()
    }

}