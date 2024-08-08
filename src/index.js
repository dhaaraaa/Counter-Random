// import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Components/Counter';
import Random from './Components/Random';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Comp(){
//   var [name,setname]=useState("ammu")
//   function change(){
//        setname("dharsh")
//   }
//   return(
//     <div>
//       <h1>{name}</h1>
//       <button onClick={change}>change</button>
//     </div>
//   )
// }



root.render(<div>
  <Counter></Counter>
  <Random></Random>
</div>

);

