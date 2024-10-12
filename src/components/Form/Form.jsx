import { useState } from 'react';
import './Form.css';


const Form = () => {
    const [border, setBorder] = useState("");
    const [gameName1, setGame1] = useState("");
    const [gameName2, setGame2] = useState("");
    const [gameName3, setGame3] = useState("");


    const reset = () => {
        setGame1("");
        setGame2("");
        setGame3("");
    }







    return (
        <>
            <div className="form-container">
                <div className="form-header">
                    <p>Video Game Recommendation System</p> <br />
                    <h3>Select Three game titles You've enjoyed to get started! </h3>

                </div>
                <hr className="line" />

                <div className="form-inputs">
                    <input type="text" onChange={(e) => { setGame1(e.target.value) }} onClick={() => setBorder("border-1")} className={border == "border-1" ? "border-input" : ""} value={gameName1} placeholder='Start typing  the  first  title...' />
                    <input type="text " onChange={(e) => { setGame2(e.target.value) }} onClick={() => setBorder("border")} className={border == "border-2" ? "border-input" : ""} value={gameName2} placeholder='Start typing  the  second title...' />
                    <input type="text" onChange={(e) => { setGame3(e.target.value) }} onClick={() => setBorder("border")} className={border == "border-3" ? "border-input" : ""} value={gameName3} placeholder='Start typing  the  third  title...' />
                </div  >

                <div className="form-button">
                    <button className="submit" disabled="disabled" type='submit'>submit</button>
                    <button onClick={reset} className='reset' type='reset'>Reset</button>
                </div>


            </div>

        </>
    )
}

export default Form
