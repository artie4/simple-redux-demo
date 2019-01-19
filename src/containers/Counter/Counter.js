import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        const value = this.props.ctr;

        return (
            <div>
                <CounterOutput
                    value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter} />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter} />
                <CounterControl
                    label={"Add " + value}
                    clicked={() => this.props.onAddCounter(value)} />
                <CounterControl
                    label={"Subtract " + value}
                    clicked={() => this.props.onSubtractCounter(value)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: (value) => dispatch({ type: 'ADD', value: value }),
        onSubtractCounter: (value) => dispatch({ type: 'SUBTRACT', value: value })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);