import { useState } from "react"

export const useInput = () => {

    const [input, setInput] = useState('');

    const handleInput = (e)=>{

        setInput(e.target.value)

    }

    const resetInput = () => {


        setInput('');

    }

   



    return [input, handleInput, resetInput]

}
