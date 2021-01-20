import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Helmet } from 'react-helmet';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import { authenticate, isAuthenticated, signin, signup } from '../../../auth/Helper';
import { Link, Redirect } from 'react-router-dom';

function LoginOne() {
    
    const [values, setValues] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false,
    })

    const { name, email, lastname, password, error, success, loading, didRedirect } = values

    const { user } = isAuthenticated()

    const handleChange = name => e => {

        setValues({ ...values, error: false, [name]: e.target.value })
    }



    const onSubmit = e => {
        e.preventDefault()
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                }
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                }

            })
            .catch(console.log("Sign in request failed"))
    }

    const onHandleSumbit = e => {
        e.preventDefault()
        setValues({ ...values, error: false })
        signup({ name, lastname, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values,
                        name: "",
                        lastname: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                }
            })
            .catch(console.log("Error in signup"))
    }

    const refreshPage = () => {
        window.location.reload();
    }
    const performRedirect = e => {
        if (didRedirect) {
            if (user && user.role === 1) {
             
                return (
                    <Redirect to='/' />
                )
            }
            else {
               
                {refreshPage()} 
                return (
                    <Redirect to='/' />
                )
                // return (
                //     <p>
                //        window.location.reload(false);
                //     </p>
                // )
            }
        }
        if (isAuthenticated) {

            return <Redirect to="/" />
        }
    }
    const LoadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info"
                >
                    LOADING ....
                </div>
            )
        )
    }
    const SuccessMessage = () => {
        return(
            <div className = "alert alert-info"
            style = {{display : didRedirect === true ? "" : "none"
            }} >
                Sign in successfull.
                Close the box to continue.
            </div>
        )
    }

    const successMessage = () => {
        return (
            <div className="alert alert-success"
                style={{ display: success ? "" : "none" }} >
                Account created Successfully .
                Please Sign in to continue.
            </div>
        )
    }
    const ErrorMessage = () => {
        return (<div className="alert alert-danger"
            style={{ display: error ? "" : "none" }} >
            {error}
        </div>)
    }

    return (
        <div className="main">
            <Helmet>
                <title>Molla React Ecommerce - { `${process.env.PUBLIC_URL}/pages/contact` } Page</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - { `${process.env.PUBLIC_URL}/pages/contact` } Page</h1>

            <Breadcrumb title="Login" parent1={ [ "pages", "pages/about" ] } adClass="border-0 mb-0" />

            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/login-bg.jpg)` } }>
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                                <TabList className="nav nav-pills nav-fill">
                                    <Tab className="nav-item">
                                        <span className="nav-link">Sign In</span>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <span className="nav-link">Register</span>
                                    </Tab>
                                </TabList>

                                <div className="tab-content">
                                    <TabPanel style={ { paddingTop: "2rem" } }>
                                    {ErrorMessage()}
                                            {SuccessMessage()} 
                                            <div>
                                                <form action="#">
                                                    <div className="form-group">
                                                        <label htmlFor="singin-email-2">Username or email address *</label>
                                                        <input onChange={handleChange("email")} value={email} type="text" className="form-control" id="singin-email-2" name="singin-email" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="singin-password-2">Password *</label>
                                                        <input onChange={handleChange("password")} value={password} type="password" className="form-control" id="singin-password-2" name="singin-password" required />
                                                    </div>
                                                    <div className="form-footer">
                                                        <button onClick={onSubmit} type="submit" className="btn btn-outline-primary-2">
                                                            <span>LOG IN</span>
                                                            <i className="icon-long-arrow-right"></i>
                                                        </button>{performRedirect()}
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="signin-remember-2" />
                                                            <label className="custom-control-label" htmlFor="signin-remember-2">Remember Me</label>
                                                        </div>
                                                        <Link to="#" className="forgot-link">Forgot Your Password?</Link>
                                                    </div>
                                                </form>
                                                <div className="form-choice">
                                                    <p className="text-center">or sign in with</p>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <Link to="#" className="btn btn-login btn-g">
                                                                <i className="icon-google"></i>
                                                            Login With Google
                                                    </Link>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <Link to="#" className="btn btn-login btn-f">
                                                                <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                    </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <form action="#">
                                            <div className="form-group">
                                                <label htmlFor="register-email-2">Your email address *</label>
                                                <input type="email" className="form-control" id="register-email-2" name="register-email" required />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="register-password-2">Password *</label>
                                                <input type="password" className="form-control" id="register-password-2" name="register-password" required />
                                            </div>

                                            <div className="form-footer">
                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span>SIGN UP</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </button>

                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                                    <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <a href="pages/login/#a">privacy policy</a> *</label>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="form-choice">
                                            <p className="text-center">or sign in with</p>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <a href="pages/login/#a" className="btn btn-login btn-g">
                                                        <i className="icon-google"></i>
                                                        Login With Google
                                                    </a>
                                                </div>
                                                <div className="col-sm-6">
                                                    <a href="pages/login/#a" className="btn btn-login  btn-f">
                                                        <i className="icon-facebook-f"></i>
                                                        Login With Facebook
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( LoginOne );