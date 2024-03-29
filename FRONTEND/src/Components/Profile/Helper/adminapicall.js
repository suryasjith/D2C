import { API } from '../../../backend'


//NOTE : create category
export const createCategory = (userId, token, category) => {
    return (
        fetch(`${API}/category/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        }
        ).then(response => {
            return response.json()
        })
            .catch(err => console.log(err))
    )
}

//NOTE: get all categories
export const getCategories = () => {
    return fetch (`${API}/categories` , {
        method : "GET"
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
    
}

//NOTE : create product

export const createProduct = (userId, token, product) => {
    return (
        fetch(`${API}/product/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: product
        }).then(response => {
            return response.json()
        }).catch(err => console.log(err))
    )
}

//NOTE : get all products
export const getProductss = () => {
    return fetch (`${API}/products` , {
        method : "GET"
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
    
}

//NOTE : get a product

export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`,{
        method : "GET"
    }).then(response=> {
        return response.json()
    })
    .catch(err => console.log(err))
}

//NOTE : upadate product
export const updateProduct = (productID,userId, token, product) => {
    return (
        fetch(`${API}/product/create/${productID}/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: product
        }).then(response => {
            return response.json()
        }).catch(err => console.log(err))
    )
}

//NOTE : delete product
export const deleteProduct = (productID,userId, token, product) => {
    return (
        fetch(`${API}/product/create/${productID}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }          
        }).then(response => {
            return response.json()
        }).catch(err => console.log(err))
    )
}