import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

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
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li
                            key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>
                            {strResult.value}
                        </li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter, // see rootReducer in index.js
        storedResults: state.result.results // see rootReducer in index.js
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (value) => dispatch(actionCreators.add(value)),
        onSubtractCounter: (value) => dispatch(actionCreators.subtract(value)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);