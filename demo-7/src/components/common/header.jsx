import React from 'react';
import { Link,useHistory, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import LoginModal from '../features/modal/login-modal';
import Logo from './partials/Assets/New Project (6).jpg'
import { showModal } from '../../actions';
import { isAuthenticated, signout } from '../../auth/Helper';
import { render } from 'react-dom';

function Header( props ) {
    function openLoginModal( e ) {
        props.showModal( 'login' );
        e.preventDefault();
    }
    const refreshPage = () => {
        window.location.reload();
    }
    const { wishlist, logo = "assets/images/logo.png", container } = props;
    // let history = useHistory();
    return (
        <header className="header header-7">
            <div className="header-top">
                <div className={ container }>
                    <div className="header-left">
                        <div className="header-dropdown">
                            <Link to="#">UNBLOK ltd</Link>
                            <div className="header-menu">
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <ul className="top-menu">
                        <li>
                                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                        <li>
                                            <Link to="/shop/admin/dashboard" data-toggle="modal" ><i className="icon-user"></i>Hi {isAuthenticated().user.name}</Link>
                                        </li>
                                    )}
                                    {isAuthenticated() && (
                                    <li><Link to="" data-toggle="modal" onClick={() => {
                                        signout(() => {
                                            refreshPage() 
                                        })
                                    }}><i className="icon-user"></i>Signout</Link></li>)}
                                    
                                    {!isAuthenticated() && (
                                    <li><Link to="#login" data-toggle="modal" onClick={ openLoginModal }><i className="icon-user"></i>Login</Link></li>)}
                                
                        </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className={ container }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <Link to={ `${process.env.PUBLIC_URL}/` } className="logo">
                            <img src={Logo} alt="Molla Logo" width="105" height="25" />
                        </Link>

                        <MainMenu />
                    </div>
                    <div className="header-right">
                        <div className="header-search header-search-extended header-search-visible">
                            <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                            <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label htmlFor="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                </div>
                            </form>
                        </div>

                        <CartMenu />
                    </div>
                </div>
            </div>
            <LoginModal />
        </header>

    );
}

function mapStateToProps( state ) {
    return {
        wishlist: state.wishlist.list
    }
}

export default connect( mapStateToProps, { showModal } )( Header );