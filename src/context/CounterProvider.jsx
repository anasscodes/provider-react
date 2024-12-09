import CounterContext from './CounterContext'
import { useReducer } from 'react'
import CounterReducer from './CounterReducer'

const CounterProvider = ({children}) => {

    const initialState = {counter: 0, loading: true}

    const [state, dispatch] = useReducer(CounterReducer,initialState)

    const increment = () =>{
        dispatch({type: "INCREMENT"})
    }

    const decrement = () =>{
        dispatch({type: "DECREMENT"})
    }

    return (

        <CounterContext.Provider value={{
            counter : state.counter,
            increment,
            decrement
        }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider