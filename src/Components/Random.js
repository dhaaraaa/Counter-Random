import { useState } from "react";

function Random() {
    var [num, setnum] = useState(0)
    function change() {
        setnum(Math.floor(Math.random() * 10 + 1))
    }
    return (
        <div className="aa">
            <div className="a">
                <h1 style={{ fontFamily: "sans-serif" }}>Random Number</h1>
            </div>
            <div className="inc-dec">
                <h2>{num}</h2>
                <button onClick={change} style={{ background: "teal" }}>random</button>
            </div>
        </div>
    )
}

export default Random;