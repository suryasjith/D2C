import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../../../auth/Helper'
import { deleteProduct, getProducts } from './helper/adminapicall';
import { Link } from 'react-router-dom'

export default function allproducts() {

    const [products, setProducts] = useState([])
    const { user, token } = isAuthenticated();
    const preload = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                setProducts(data);
            }
        })
    }
    useEffect(() => {
        preload()
    }, [])

    const deleteThisProduct = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                preload();
            }
        });
    };

    return (
        <>
            <form>
                <div class="card">
                    <div class="card-header">
                        Manage Products
        </div>
                    <div class="card-body">
                        <h5 class="card-title">Edit and Delete the products</h5>
                        <p class="card-text">Check the products before performing actions</p>
                        <br /> 
                        <br /> <li>
                            {products.map((product, index) => {
                                return (
                                    <ul>
                                        <div key={index} className="row mb-2">
                                            <div className="col-6">
                                                <h5 className="text-left">{product.name}</h5>
                                            </div>
                                            <div className="col-6">
                                                <Link className="btn btn-info" to={'/admin/product/productId'}>Update</Link>
                                                <button onClick={() => { deleteThisProduct(product._id) }} className="btn btn-danger" >Delete</button>
                                            </div>
                                        </div>
                                    </ul>
                                )
                            })}
                            </li>
                        <br /> <br />
                    </div>
                </div>
            </form>
        </>
    )
}




