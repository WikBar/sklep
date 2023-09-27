import React from "react"
import Header from "./Header"
import Footer from "./Footer"


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
