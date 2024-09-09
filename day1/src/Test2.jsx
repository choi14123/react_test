import { useState } from 'react';

const Test2 = () => {
  const [state, setName] = useState({name: "최창환", log: [] });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "name") return setName({ ...state, [name]: value, log: [...state.log, value] })
      setName({ ...state, [name]: value })
  }
  return (
    <div className="App">
      <input name="name" onChange={onChangeHandler} value={state.name} />
      {state.log.map((value) => <div> {value}</div>)}
    </div>
  );
}

export default Test2;