import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useContext } from "react";
import CounterContext from "../../context/CounterContext";



export const Counter = () => {

    const {counter,increment,decrement} = useContext(CounterContext)

  return (


    <>
    <div className="row">
        <div className="col-md-8 mx-auto">
                <h1>My Counter : {counter}</h1>
            <button onClick={increment} className='btn btn-success mr-2'>
            <FaPlusCircle />
            </button>
            <button onClick={decrement} className='btn btn-warning'>
            <FaMinusCircle />
            </button>
        </div>

    </div>
    
    
    </>
  )
}

 