import {useState, useEffect } from "react";


export default function Counter(){
    const[count, setCount] = useState(0);
    const[name, setName] = useState("");
useEffect(function myEffect(){
    console.log("My effect was called")
}, []);
    const increment = () =>{
        setCount(count + 1);
    }

    const handleChange = (e) =>{
        setName(e.target.value)
    }



        return (
            <div>
<h1>Count is {count}</h1>
<button onClick={increment}>Click to increment</button>
<p>Name: {name}</p>
<input value={name} onChange={handleChange} type="text" />
            </div>
        )
    }
