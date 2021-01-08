import { Button, FormHelperText, Grid, InputLabel, Paper, Select, TextField } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/Helper'
import Base from '../Core/Base'
import { createProduct } from './Helper/adminapicall';



const AddProduct = () => {

    const [values, setValues] = useState({

        name: "",
        description: "",
        price: "",
        stock: "",



    })
    const { name, description, price, stock } = values
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)


    const { user, token } = isAuthenticated()



    const handleChange = name => e => {
        setError("")

    }
    const onSubmit = (e) => {
        e.preventDefault()
        setError("")
        setSuccess(false)
        //NOTE : backend requested
        createProduct(user._id, token, {})
            .then(data => {
                if (data.error) {
                    setError(true)
                }
                else {
                    setError("")
                    setSuccess(true)
                }
            })
    }

    const successMessage = () => {
        if (success) {
            return <h6 className="alert alert-success">
                Category created succesfully
            </h6>
        }
    }

    const errorMessage = () => {
        if (error) {
            return <h6 className="alert alert-danger" >
                Category creation failed
                : {error}
            </h6>
        }
    }

    const myCategoryForm = () => {
        return (
            <div className=" form-group" style={{
                textAlign: "center",
                color: "darkslategray"
            }}>
                <br />
                <form>

                    <TextField type="text" onChange={handleChange("name")} value={name} marginTop="3" autoFocus required label="Enter product name" fullWidth />< br />< br />< br />
                    <TextField type="text" onChange={handleChange("description")} value={description} marginTop="3" autoFocus required label="Enter the description" fullWidth />< br />< br />< br />
                    <TextField type="text" marginTop="3" onChange={handleChange("price")} value={stock} autoFocus required label="Enter the price" fullWidth />< br />< br />< br />
                    <TextField type="text" marginTop="3" onChange={handleChange("stock")} autoFocus value={price} required label="Enter the quantity" fullWidth />< br />< br />< br />

                    <InputLabel fullWidth >Select Category</InputLabel >
                    <Select label="" fullWidth>
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                    <br />
                    <input
                        style={{ display: 'none' }}
                        accept="image/*"

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
                <br />
                <br />
                <br />
                <Grid container >
                    <Grid item xs={12} sm={4} />
                    <Grid item xs={12} sm={4} md={4} lg={4} >
                        <Paper style={{
                            padding: "3",
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingBottom: 8,
                            paddingTop: 8,
                        }}>
                            <h3 className="card-title" style={{ textAlign: "center" }}>Add Product</h3>
                            {myCategoryForm()}
                            {successMessage()}
                            {errorMessage()}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} />
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
