import { useState } from "react";


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );


    const increment = () => {
        setCounter( counter + 1);
    }

    const decrement = () => {
        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter( initialValue );
    }


    return {
        // counter: counter,                          //Si tiene mismo nombre se manda solo una vez
        counter,
        increment,
        decrement,
        reset,
    };
};