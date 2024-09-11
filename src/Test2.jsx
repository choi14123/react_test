import { useState } from "react";
import Log from "./components/Log";


const Test2 = ()=>{
    const [txt, setTxt] = useState("")
    const [logs, setLogs] = useState([])
    const onChangeTxt = (e) => {
        setTxt(e.target.value)
        setLogs([...logs, e.target.value])
    }
    return <div>
        <input name="text" onChange={onChangeTxt} />
        {logs.map((str,i)=> <Log i={i} str={str} />)}
    </div>
}

export default Test2;