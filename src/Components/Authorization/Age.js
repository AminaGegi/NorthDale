import React, {useState} from "react";
import "../../style/authorization/Age.scss"


export default function Age () {
    let [input, setInput] = useState("");
    return <>
        <div className='age item'>
            <label>
                <div>Возраст</div>
                <div className='age-content'>
                    <div className='age-range'>
                        <div className='age-range-diapason'>
                            <div className='age-range-diapason-min'>
                                0
                            </div>
                            <div className='age-range-diapason-max'>
                                100
                            </div>
                        </div>
                        <input className='age-range__input' type="range" name="age" min="0" max="100" value={input} onChange={(event) => setInput(event.target.value)} />
                    </div>
                    <div>
                        <input className='age-number__input' value={input} onChange={(event) => setInput(event.target.value)}/>
                    </div>
                </div>
            </label>
        </div>
    </>
}
