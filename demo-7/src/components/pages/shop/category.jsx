import React, { useState } from 'react'
import { isAuthenticated } from '../../../auth/Helper'
import { createCategory } from './helper/adminapicall'

export default function Category() {

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


    return (
        <div>
            <form>
            <div class="card">
                <div class="card-header">

                </div>
                <div class="card-body">   <h5 class="card-title">Add category name here</h5>
                    <br /> <input className = "auto-focus" onChange = {handleChange} value = {name} type="text" placeholder = "Enter here" />
                    

                    <p class="card-text">Add the name of the category here (please check the other category names to avoid conflict)</p>
                    <button onClick = {onSubmit} href="#" class="btn btn-info">Add Now</button>
                </div>
            </div>
            {successMessage()}
            {errorMessage()}
            </form>
        </div>
    )
}
