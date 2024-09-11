import { useState } from "react";
import ResultView from "./ResultView";
import CalcHandler from "./CalcHandler";


const Calc = () => {
    console.log("Calc")
    return <div>
        <ResultView />
        <CalcHandler />
    </div>

}

export default Calc;