import React from 'react'
import { withRouter } from 'react-router-dom'
import FooterSection from '../FooterSection/FooterSection'
import HeaderSection from '../Header/HeaderSection'
import '../../Assets/css/bg.css'
import PropTypes from 'prop-types';
import { Box, Container, CssBaseline, Toolbar, useScrollTrigger } from '@material-ui/core'

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


const Base = ({ children }) => {

    const ElevateAppBar = props => {
        return (
            <React.Fragment>
                <CssBaseline />
                <ElevationScroll {...children}>
                    <HeaderSection />
                </ElevationScroll>
                <Toolbar />




            </React.Fragment>)
    }
    return (
        <div>
            {ElevateAppBar()}
            <br />
            <Container>
                <Box
                >
                    {children}
                </Box>

            </Container>

            <FooterSection />

        </div>
    )
}

export default withRouter(Base);
