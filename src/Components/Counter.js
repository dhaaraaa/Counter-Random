import { useState } from "react";

function Counter() {

    var [num, setnum] = useState(0)


    function incre() {

        var newnum = num + 1
        setnum(newnum)

    }
    function decre() {
        var newnum = num - 1
        setnum(newnum)
    }
    return (
        <div className="aa">
            <div className="a">
                <h1 style={{ fontFamily: "sans-serif" }}>Counter</h1>
            </div>
            <div className="inc-dec">
                <h2>{num}</h2>
                <div className="btn">
                    <button onClick={incre} style={{ background: "teal" }} >increment</button>
                    <button style={{ background: "wheat" }} onClick={decre} >decrement</button>
                </div>

            </div>
        </div>
    )
}


export default Counter;