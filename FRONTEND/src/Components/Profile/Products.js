import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Base from '../Core/Base'

const Products = () => {
    return (
        <div>
            <Base>
                <Grid container >
                    <Container >
                        <ul>   
                            <h3 >
                            Manage Products
                            </h3>
                            <li>
                                <h4>
                                    products
                                </h4>
                            </li>
                        </ul>
                    </Container>
                </Grid>
            </Base>
        </div>
    )
}
export default Products;