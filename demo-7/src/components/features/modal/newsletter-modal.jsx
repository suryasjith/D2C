import React, { useState} from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';


import { removeNewsletterMdoal } from '../../../actions';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(51,51,51,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement( '#root' );

function NewsletterModal( props ) {
    const {removeNewsletterMdoal } = props;
    const [ open, setOpen ] = useState( false );
    let  closeType;

    


    function closeModal( e ) {
        if ( closeType === "forever" ) {
            removeNewsletterMdoal();
        }

        setOpen( false );

        document.getElementById( "newsletter-popup-form" ).classList.remove( "ReactModal__Content--after-open" );
    }

    return (
        <Modal
            isOpen={ open }
            onRequestClose={ closeModal }
            style={ customStyles }
        >
        </Modal>
    );
}

function mapStateToProps( state ) {
    return {
        newsletter: state.modal.newsletterModal
    }
}

export default connect( mapStateToProps, { removeNewsletterMdoal } )( NewsletterModal );