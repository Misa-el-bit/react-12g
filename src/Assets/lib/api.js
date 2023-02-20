const BASE_URL = "https://shooping-cart-e9d4b-default-rtdb.firebaseio.com"

export default {
    async getAllProducts(){
        let result = await fetch(`${BASE_URL}/products/.json`)
        return await result.json()
    },
    async getProductById(productId){
        let result = await fetch (`${BASE_URL}/products/${productId}.json`)
        return await result.json()
    },
    async createProduct(productData){
        let result = await fetch (`${BASE_URL}/products/.json`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
        return await result.json()
    },
    async deleteProductById(productId){
        let result = await fetch (`${BASE_URL}/products/${productId}.json`,{
            method:"DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await result.json()
    },
    async updateProductById(productData, productId){
        let result = await fetch (`https://shooping-cart-e9d4b-default-rtdb.firebaseio.com/products/${productId}.json`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
        return await result.json()
    },
    
}