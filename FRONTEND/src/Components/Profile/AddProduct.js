import { Button, FormHelperText, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/Helper'
import Base from '../Core/Base'
import { createProduct, getCategories } from './Helper/adminapicall';



const AddProduct = () => {

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
        setValues({ ...values, error: "", loading: true, getaRedirect : true })
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
            style = {{
                display : createdProduct ? "" :"none"
            }}
            >
                <h4>Added {createdProduct} successfully </h4>
            </div>
        
    }

    const errorMessage = () => {
        // if (getaRedirect == true) {
            return <h6 className="alert alert-danger" style ={{
                display : (error === false) ? "none" : ""
            }} >
                Product creation failed
                : {error}
            </h6>
        // }
    }

    const myProductForm = () => {
        return (
            <div className=" form-group" style={{
                textAlign: "center",
                color: "darkslategray"
            }}>
                <br />
                <form>

                    <TextField type="text" onChange={handleChange("name")} value={name} marginTop="3" autoFocus required label="Enter product name" fullWidth />< br />< br />< br />
                    <TextField type="text" onChange={handleChange("description")} value={description} marginTop="3" required label="Enter the description" fullWidth />< br />< br />< br />
                    <TextField type="text" marginTop="3" onChange={handleChange("price")} value={price} required label="Enter the price" fullWidth />< br />< br />< br />
                    <TextField type="text" marginTop="3" onChange={handleChange("stock")} value={stock} required label="Enter the quantity" fullWidth />< br />< br />< br />

                    <InputLabel fullWidth >Select Category</InputLabel >
                    <Select label="" fullWidth onChange={handleChange("category")}>
                    <MenuItem  value=""></MenuItem>

                        {categories &&
                            categories.map((cate, index) => (

                                <MenuItem key={index} value={cate._id}>{cate.name}</MenuItem>


                            ))}


                    </Select>
                    <FormHelperText>Required</FormHelperText>
                    <br />
                    <input
                        onChange={handleChange("photo")}
                        style={{ display: 'none' }}
                        accept="image/*"
                        name="photo"
                        id="contained-button-file"
                        multiple
                        type="file"
                    />

                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Click to upload image
                        </Button>
                    </label>
                    <br />
                    <br />
                    <Button onClick={onSubmit} style={{
                        backgroundColor: "#222831",
                        color: "whitesmoke"
                    }}>Add Product</Button>< br />< br />
                </form>


            </div>
        )
    }
    return (
        <div>
            <Base>
                <Link to="/admin/dashboard"> <Button><ArrowBackIcon />  Back to Dashboard </Button><br /> <br /></Link>
                <br />
                <br />
                <br />
                <br />
                <Grid container >
                    <Grid item xs={12} sm={3} md={3} lg ={4} />
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <Paper style={{
                            padding: "3",
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingBottom: 8,
                            paddingTop: 8,
                        }}>
                            <h3 className="card-title" style={{ textAlign: "center" }}>Add Product</h3>
                            {myProductForm()}
                            {successMessage()}
                            {errorMessage()}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} md= {3} lg={4} />
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Base>
        </div>
    )
}
export default AddProduct;
