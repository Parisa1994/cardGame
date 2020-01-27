import React from 'react';


class MasterPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default MasterPage;