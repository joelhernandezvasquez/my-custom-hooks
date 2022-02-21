
import {useState} from 'react';

 const useCounter = (initialValue = 0) => {
  
    const[counter,setCounter] = useState(initialValue);

    const increment = (factor = 1) =>{
        setCounter(counter + factor);
    }

    const decrement = (factor = 1)=>{
        setCounter(counter - factor);
    }

    const reset = () =>{
        setCounter(initialValue)
    }

    return [counter,increment,decrement,reset];

};
export default useCounter;