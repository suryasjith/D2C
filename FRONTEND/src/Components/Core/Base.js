import React from 'react'
import { withRouter } from 'react-router-dom'
import FooterSection from '../FooterSection/FooterSection'
import HeaderSection from '../Header/HeaderSection'

const Base =({children}) => {
    return (
        <div>
            <HeaderSection />
            {children}
            <FooterSection />
            
        </div>
    )
}

export default withRouter(Base);
