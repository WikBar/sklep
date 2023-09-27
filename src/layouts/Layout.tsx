import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


class Layout extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <>
                <div>
                    <Header/>
                    <main>{children}</main>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default Layout;
