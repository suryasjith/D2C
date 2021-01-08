import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Base from '../Core/Base'
import { isAuthenticated } from '../auth/Helper/index'
import { Avatar, Chip, Grid } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
const {
    user: { name, lastname, email,

        // role
    }
} = isAuthenticated()

const adminLeftSide = () => {
    return (
        <div className="card" >
            <h4 className="card-header bg-dark text-white" >Navigations</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/create/category" className="nav-link text-dark"> Add Category</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/create/product" className="nav-link text-dark"> Add Product</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/products" className="nav-link text-dark"> Manage Products</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/orders" className="nav-link text-dark"> Manage Orders</Link>
                </li>
            </ul>
            <div style={{ textAlign: "center" }} className="card-footer text-muted">
                UNBLOK Authorized
            </div>
        </div>
    )
}
const adminRightSide = () => {
    return (
        <div className="card">
            <h4 className="card-header bg-dark text-white" >Hi {name}</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <h6>
                        <u> Personal details</u>
                    </h6>
                </li>
                <li className="list-group-item">
                    <Chip size="small" label="Name" /> : <Chip variant="outlined" label={name + " " + lastname} color="dark" />
                </li>
                <li className="list-group-item">
                    <Chip size="small" label="Mail Id" /> : <Chip variant="outlined" avatar={<Avatar></Avatar>} label={email} color="dark" />
                </li>

                <li className="list-group-item">
                    <Chip size="small" label="Accessibility" /> :  <Chip variant="outlined" color="secondary" label="You are an Admin" deleteIcon={<DoneIcon />} /> <Chip variant="outlined" color="primary" label="You can manage the inventory" deleteIcon={<DoneIcon />} />
                </li>
            </ul>
        </div>
    )
}
const AdminProfile = () => {

    return (
        <Base>
            <Grid container >
                <Grid item xs={12} sm={3} md={2} >
                    {adminLeftSide()}
                </Grid>
                <Grid item xs={12} sm md={10}>
                    {adminRightSide()}
                </Grid>
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
    )
}
export default withRouter(AdminProfile);