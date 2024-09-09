import { useState } from "react";
import logsLender from '../../day1/src/compant/log';


const Test2 = ()=>{
    const [txt, setTxt] = useState("")
    const [logs, setLogs] = useState([])
    const onChangeTxt = (e) => {
        setTxt(e.target.value)
        setLogs([...logs, e.target.value])
    }

    return <div>
        <input name="text" onChange={onChangeTxt} />
        {logs.map(logsLender)}
    </div>
}

export default Test2;