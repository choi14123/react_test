import { useRecoilState, useRecoilValue } from "recoil";
import { resultState } from "../../store/calc";

const ResultView = ()=>{
    console.log("ResultView")
    const result = useRecoilValue(resultState)
    return <h1>{result}</h1>
}
export default ResultView;