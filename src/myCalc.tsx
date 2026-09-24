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
        } catch(error){
            setInput("Error!");
        }
    }
    return (
        <div className='container'>
            <div className='result'>{input}</div>
            <div className='buttons'>
                <button id="btnAC" onClick={handleClear}>AC</button>
                <button id="btn%" onClick={() => handleClick("%")}>%</button>
                <button id="btn/" onClick={() => handleClick("/")}>/</button>
                <button id="btn*" onClick={() => handleClick("*")}>x</button>
                <button id="btn0" onClick={() => handleClick("7")}>7</button>
                <button id="btn1" onClick={() => handleClick("8")}>8</button>
                <button id="btn2" onClick={() => handleClick("9")}>9</button>
                <button id="btn+" onClick={() => handleClick("+")}>+</button>
                <button id="btn3" onClick={() => handleClick("4")}>4</button>
                <button id="btn4" onClick={() => handleClick("5")}>5</button>
                <button id="btn5" onClick={() => handleClick("6")}>6</button>
                <button id="btn-" onClick={() => handleClick("-")}>-</button>
                <button id="btn6" onClick={() => handleClick("6")}>1</button>
                <button id="btn7" onClick={() => handleClick("7")}>2</button>
                <button id="btn8" onClick={() => handleClick("8")}>3</button>
                <button id="btn=" onClick={handleCalc}>=</button>
                <button id="btn." onClick={() => handleClick(".")}>.</button>
                <button id="btn." onClick={() => handleClick("0")}>0</button>
            </div>
        </div>
    );
};
export default MyCalc;
