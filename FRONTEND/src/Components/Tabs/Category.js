import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const AntTabs = withStyles({
    root: {
        backgroundColor: '#f1f6f9',
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#1890ff',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        paddingRight : '10px',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(6),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

// const StyledTabs = withStyles({
//     indicator: {
//         display: 'flex',
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//         '& > span': {
//             maxWidth: 40,
//             width: '100%',
//             backgroundColor: '#635ee7',
//         },
//     },
// })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

// const StyledTab = withStyles((theme) => ({
//     root: {
//         textTransform: 'none',
//         color: '#fff',
//         fontWeight: theme.typography.fontWeightRegular,
//         fontSize: theme.typography.pxToRem(15),
//         marginRight: theme.spacing(1),
//         '&:focus': {
//             opacity: 1,
//         },
//     },
// }))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    demo2: {
        backgroundColor: '#2e1534',
    },
}));

const CategoryTabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.demo1}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    <Link to = "/" ><AntTab label="Home " /></Link>
                    
                    <AntTab label="Category" />
                    <AntTab style = {{color : "green"}} label="Life" />

                </AntTabs>
                <Typography className={classes.padding} />
            </div>
            {/* <div className={classes.demo2}>
                <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                    <StyledTab label="Workflows" />
                    <StyledTab label="Datasets" />
                    <StyledTab label="Connections" />
                </StyledTabs>
                <Typography className={classes.padding} />
            </div> */}
        </div>
    );
}



export default CategoryTabs;