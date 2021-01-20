import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../../auth/Helper'
import { createProduct, getCategories } from './helper/adminapicall'

export default function products() {

    const [values, setValues] = useState({

        name: "",
        description: "",
        price: "",
        stock: "",
        photo: "",
        categories: [],
        category: "",
        loading: false,
        error: false,
        createdProduct: "",
        getaRedirect: false,
        formData: ""
    })
    const { name,
        description,
        price,
        stock,
        categories,
        category,
        loading,
        error,
        createdProduct,
        getaRedirect,
        formData } = values

    const preload = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, categories: data, formData: new FormData() })
                console.log(categories);
            }
        })
    }


    useEffect(() => {
        preload()

    }, [])

    const { user, token } = isAuthenticated()



    const handleChange = name => e => {
        const value = name === "photo" ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value })
    }


    const onSubmit = (e) => {
        e.preventDefault()
        setValues({ ...values, error: "", loading: true, getaRedirect: true })
        //NOTE : backend requested
        createProduct(user._id, token, formData)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    setValues({
                        ...values,
                        name: "",
                        description: "",
                        price: "",
                        stock: "",
                        photo: "",
                        categories: [],
                        category: "",
                        loading: false,
                        error: false,
                        createdProduct: data.name,
                        getaRedirect: false,
                        formData: ""
                    })
                }
            }).catch()
    }

    const successMessage = () => {

        return <div className="alert alert-success"
            style={{
                display: createdProduct ? "" : "none"
            }}
        >
            <h6>Added {createdProduct} successfully </h6>
        </div>

    }

    const errorMessage = () => {
        // if (getaRedirect == true) {
        return <h6 className="alert alert-danger" style={{
            display: (error === false) ? "none" : ""
        }} >
            Product creation failed
                : {error}
        </h6>
        // }
    }





    return (
        <>
            <form>
                <div class="card">
                    <div class="card-header">
                        Add Product Section
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Add the product here</h5>
                        <p class="card-text">Fill all the field inorder to avoid conflicts and errors.</p>
                        Product Name <br />
                        <input  onChange={handleChange("name")} value={name} className="input-group" required type="text"></input><br />
                        Description <br />
                        <input  onChange={handleChange("description")} value={description} className="input-group" type="text" required ></input><br />
                        Price of product <br />
                        <input  onChange={handleChange("price")} value={price} className="input-group" type="text" required ></input><br />
                        Quantity of Product <br />
                        <input  onChange={handleChange("stock")} value={stock} className="input-group" type="text" required ></input><br />
                        Select Category <br />
                        <select onChange={handleChange("category")} class="form-select form-select-lg" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            {categories &&
                            categories.map((cate, index) => (

                                <option key={index} value={cate._id}>{cate.name}</option>


                            ))}
                        </select><br />
                        <br />
                        <label class="input-group-text" for="inputGroupFile01">Upload image</label>
                        <input accept = "image/*"  onChange={handleChange("photo")} type="file" class="form-control" id="inputGroupFile01" />
                        <br /> <br />
                        <button onClick = {onSubmit} href="#" class="btn btn-info">Add Product</button>
                    </div>
                </div>
                {successMessage()}
                            {errorMessage()}
            </form>

        </>
    )
}
