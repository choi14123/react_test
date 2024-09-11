import { useState } from "react";
import { calc } from "../../feature/calc"
import { useRecoilState } from "recoil";
import { resultState } from "../../store/calc";

const CalcHandler = ()=>{
    const [result, setResult] = useRecoilState(resultState)
    const [target, setTarget] = useState(0);
    const onChangeTarger = (e) => setTarget(Number(e.target.value))
    const onChangeResult= (targetFunc)=>{
        const newResult = targetFunc(result, target)
        setResult(newResult)
    }
    console.log("CalcHandler")
    return (
        <>
            <input type="number"  onChange={onChangeTarger}/>
            {calc.map(({name, func})=> 
                <button key={name} onClick={()=>onChangeResult(func)}>{name}</button>)
            }
        </>
    )
}
export default CalcHandler;