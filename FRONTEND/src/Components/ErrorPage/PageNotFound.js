import React from 'react'
import FooterSection from '../FooterSection/FooterSection'
import HeaderSection from '../Header/HeaderSection'

export default function PageNotFound() {
    return (
        <div>
            <HeaderSection />
                <center>
                    <h1>
                        Oops ! Page not Found !
                    </h1>
                </center>
            <FooterSection />
        </div>
    )
}
