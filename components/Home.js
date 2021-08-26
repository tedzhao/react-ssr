import React from 'react'
import { connect } from "react-redux"
import { IncrementAction, DecrementAction } from '../redux/actions'

const Home = ({count, handleIncrementClick, handleDecrementClick}) => {

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecrementClick}>Decrement</button>
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    count: state
})

const mapDispatchToProps = dispatch => {
    return {
      handleIncrementClick: () => dispatch( IncrementAction() ),
      handleDecrementClick: () => dispatch( DecrementAction() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)