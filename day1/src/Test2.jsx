import { useState } from 'react';

const Test2 = () => {
  const [state, setState] = useState({ name: "최창환", log: [] });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setState(prevState => ({
        ...prevState,
        [name]: value,
        log: [...prevState.log, value]
      }));
    }
  };

  return (
    <div className="App">
      <input
        name="name"
        onChange={onChangeHandler}
        value={state.name}
        placeholder="이름을 입력하세요"
      />
      <div>
        {state.log.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  );
};

export default Test2;
