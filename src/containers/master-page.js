import React from 'react';
import Header from "./header";
import Footer from "./footer";

class MasterPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header/>
                {
                    this.props.children
                }
                <Footer/>
            </div>
        );
    }
}

export default MasterPage;