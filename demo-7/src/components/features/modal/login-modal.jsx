import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Redirect, withRouter } from 'react-router-dom';
import { signin, authenticate, isAuthenticated, signup } from '../../../auth/Helper/index'
import { closeModal } from '../../../actions';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement('#root');

function LoginModal(props) {
    const { showModal, modal } = props;
    let timer;

    function closeModal() {
        document.getElementById("login-modal").classList.remove("ReactModal__Content--after-open");

        timer = setTimeout(() => {
            props.closeModal('login');
        }, 200);
    }

    useEffect(() => {
        return () => {
            if (timer) clearTimeout(timer);
        }
    })

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
                {refreshPage()}
                return (
                    <Redirect to='/' />
                )
            }
            else {
                { closeModal() }
                {refreshPage()}
                
                // return (
                //     <p>
                //        window.location.reload(false);
                //     </p>
                // )
            }
        }
        if (isAuthenticated) {

            return <Redirect to="/" />
        }{ closeModal() }
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
        <>
            <Modal
                isOpen={showModal && 'login' === modal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Login Modal"
                className="modal-dialog modal-dialog-centered"
                id="login-modal" >
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true"><i className="icon-close"></i></span>
                        </button>
                        <div className="form-box">
                            <div className="form-tab">
                                <Tabs selectedTabClassName="show" defaultIndex={0}>
                                    <TabList className="nav nav-pills nav-fill">
                                        <Tab className="nav-item">
                                            <span className="nav-link">Sign In</span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link">Register</span>
                                        </Tab>
                                    </TabList>
                                    <div className="tab-content">
                                        <TabPanel style={{ paddingTop: "2rem" }}>
                                            {ErrorMessage()}
                                        
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
                                            {successMessage()}
                                            {ErrorMessage()}
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="register-email-2">Your first name *</label>
                                                    <input onChange = {handleChange("name")} value = {name} type="text" className="form-control" id="register-firstname" name="register-firstname" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="register-email-2">Your last name *</label>
                                                    <input onChange = {handleChange("lastname")} value = {lastname} type="text" className="form-control" id="register-lastname" name="register-lastname" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="register-email-2">Your email address *</label>
                                                    <input onChange = {handleChange("email")} value = {email} type="email" className="form-control" id="register-email-2" name="register-email" required />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-password-2">Password *</label>
                                                    <input onChange={handleChange("password")} value = {password} type="password" className="form-control" id="register-password-2" name="register-password" required />
                                                </div>

                                                <div className="form-footer">
                                                    <button onClick = {onHandleSumbit} type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                                        <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <Link to="#">privacy policy</Link> *</label>
                                                    </div>
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
                                                        <Link to="#" className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                        Login With Facebook
                                                    </Link>
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
            </Modal>
        </>
    )
}

function mapStateToProps(state) {
    return {
        showModal: state.modal.showModal,
        modal: state.modal.modal
    }
}

export default connect(mapStateToProps, { closeModal })(LoginModal);