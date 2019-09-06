import React from 'react';
import { connect } from 'react-redux';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div> count is {this.props.count}</div>
                <div> name is {this.props.name}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
   return {
       count: state.counterReducer,
       name: state.nameReducer
   } 
}

export default connect(mapStateToProps)(HeaderComponent);