import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Men from '../../Assets/Images/Men.jpg'
import Women from '../../Assets/Images/Women.jpg'
import Kid from '../../Assets/Images/Kid.jpg'
import Climate from '../../Assets/Images/Winter.jpg'
import { Divider } from '@material-ui/core';






const images = [
    {
        url: Men,
        title: "Men's Fashion",
        width: '40%',
        link: "/men"
    },
    {
        url: Women,
        title: "Women's Fashion",
        width: '30%',
        link: "/women"
    },
    {
        url: Kid,
        title: "Kid's Fashion",
        width: '30%',
        link: "/kids"
    },

    {
        url: Climate,
        title: 'Winter Fashion',
        width: '30%',
        link: "/climate"
    }

];
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        maxHeight: 700
    },
});



const CategoryCards = () => {
    const classes = useStyles();

    return (
        <div  >
            <br />
            <Divider />
            <Typography style={{
                textAlign: "center",
                fontFamily: 'Nova Flat',
            }} >
                <span >
                    <h3>
                        Shop By Category
                    </h3>
                </span>
            </Typography>
            <Divider />
            <br />
            <Grid container spacing={0} position="static">
                <Grid item xs>
                </Grid>
                <Grid container spacing={1} xs={12} sm={10} >
                    {images.map((image) => (
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Card className={classes.root} variant="no-outlined">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image={image.url}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {image.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button color="black">
                                        Shop now
                                    </Button>
                                </CardActions>
                            </Card>
                            <br />
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </div>
    );
}

export default CategoryCards;