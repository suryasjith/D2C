import { Button, Grid, Paper, TextField } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/Helper'
import Base from '../Core/Base'
import { createCategory } from './Helper/adminapicall';



const AddCategory = () => {

    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)


    const { user, token } = isAuthenticated()



    const handleChange = e => {
        setError("")
        setName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setError("")
        setSuccess(false)
        //NOTE : backend requested
        createCategory(user._id, token, { name })
            .then(data => {
                if (data.error) {
                    setError(true)
                }
                else {
                    setError("")
                    setSuccess(true)
                    setName("")


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
                    <TextField onChange={handleChange} value={name} type="text" marginTop="3" autoFocus required label="Enter the category" fullWidth />< br />< br />< br />
                    <Button onClick={onSubmit} style={{
                        backgroundColor: "#222831",
                        color: "whitesmoke"
                    }}>Add Category</Button>< br />< br />
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
                    <Grid item xs={12} sm={5} />
                    <Grid item xs={12} sm={4} md={4} lg={2} >
                        <Paper style={{
                            padding: "3",
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingBottom: 8,
                            paddingTop: 8,
                        }}>
                            <h3 className="card-title" style={{ textAlign: "center" }}>Add Category</h3>
                            {myCategoryForm()}
                            {successMessage()}
                            {errorMessage()}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={5} />
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
export default AddCategory;