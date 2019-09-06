import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCounter, subCounter, changeName } from './../actions';
import HeaderComponent from './headerComponent';

class ItemComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentWillUnmount() {
        localStorage.clear();
    }

    incrementCounter = () => {
        //todo: increment the counter value
        console.log('coming inside handler');
        this.props.dispatch(addCounter()) //dispatch an action
    }

    decrementCounter = () => {
        this.props.dispatch(subCounter());
    }

    handleChange = (e) => {
        this.props.dispatch(changeName(e.target.value));
    }

    render() {
        return (
            <div>
                <h3>Counter demonstration</h3>
                <HeaderComponent></HeaderComponent>
                <p>count from item component is {this.props.count}</p>
                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button> <br />
                <button className="btn btn-success" onClick={this.decrementCounter}>Decrement</button> <br />
                <input type="text" onChange={this.handleChange}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) { //when we want to dispatch an action from the component
    return {
        actions: bindActionCreators(dispatch)
    }
}

function mapStateToProps(state) {
    return {
        count: state.counterReducer
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(ItemComponent);
