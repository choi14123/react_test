const Log = ({i, str}) => {
    if(i%2===0) return <p>출력이 x</p>
    if(i%3 ===0) return <p>3배수</p>
    return <p key={i +" "+ str}>{str}</p>;
}
export default Log

