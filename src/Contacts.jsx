import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Contacts = () =>{
    const [count, setCount] = useState(0);
   const counterRef = useRef(null);

   useEffect(()=>{
    counterRef.current.style.color = "blue";
   },[])


   useEffect(()=>{
    document.title = "count - " + count

   },[count])

    return <main className="p-5 mt-5">
    <p ref={counterRef}>{count}</p>
    <button onClick={()=>{
        setCount(count + 1)
    }}>
        <FontAwesomeIcon icon={faPlus}/> 
    </button>

    <button onClick={()=>{
        if(count === 0){
            return
        }else{
            setCount(count - 1)

        }
        
    }} >
        <FontAwesomeIcon icon={faMinus}/> 
    </button>
    </main>
}

export default Contacts