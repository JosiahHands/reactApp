import {useState} from 'react';
import './myCalc.css'
const MyCalc = () => {
    const [input, setInput] = useState<string>("");
    const handleClick = (value: string) => {
        setInput((prevInput) => prevInput + value);
    };
    const handleClear = () => {
        setInput("")
    };
    const handleCalc = () => {
        try {
            setInput(eval(input).toString());
        } catch (error){
            setInput('Error!');
        }
    }
    return (
        <div className='container'>
            <div className='result'>{input}</div>
            <div className='buttons'>
                <button onClick={handleClear}>AC</button>
                <button onClick={() => handleClick("/")}>/</button>
                <button onClick={() => handleClick("*")}>x</button>
                <button onClick={() => handleClick("-")}>-</button>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={handleCalc}>=</button>
                <button id="zero" onClick={() => handleClick("0")}>0</button>
            </div>
        </div>
    );
};
export default MyCalc;
