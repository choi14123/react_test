/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

// 초기 person 객체를 설정
const init = { name: "", age: 0 };

// 스타일 정의 (css 함수 사용)
const inputStyle = css`
  margin: 5px;
  padding: 8px;
  font-size: 1rem;
`;

const buttonStyle = css`
  margin: 5px;
  padding: 10px 15px;
  background-color: hotpink;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: hotpink;
  }
`;

// 테이블에 대한 스타일 (styled 사용)
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;

  th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    cursor: pointer;
  }

  tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

const Person = () => {
  const [person, setPerson] = useState({ ...init });
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [isSortedAsc, setIsSortedAsc] = useState(true); // 정렬 상태

  const onChangePerson = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const onSubmit = () => {
    if (editIndex !== null) {
      const updatedPeople = [...people];
      updatedPeople[editIndex] = person;
      setPeople(updatedPeople);
      setEditIndex(null);
    } else {
      setPeople([...people, { ...person }]);
    }
    setPerson({ ...init });
  };

  const tdDelete = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
  };

  const tdUpdate = (index) => {
    setPerson(people[index]);
    setEditIndex(index);
  };

  const sortByAge = () => {
    const sortedPeople = [...people].sort((a, b) =>
      isSortedAsc ? a.age - b.age : b.age - a.age
    );
    setPeople(sortedPeople);
    setIsSortedAsc(!isSortedAsc); // 정렬 방향을 토글
  };

  return (
    <div>
      <input
        name="name"
        value={person.name}
        onChange={onChangePerson}
        css={inputStyle} // 입력 필드에 스타일 적용
        placeholder="Name"
      />
      <input
        name="age"
        value={person.age}
        onChange={onChangePerson}
        css={inputStyle} // 입력 필드에 스타일 적용
        placeholder="Age"
      />
      <button onClick={onSubmit} css={buttonStyle}>
        {editIndex !== null ? "수정" : "등록"}
      </button>
      <br />
      <input
        onChange={(e) => setSearch(e.target.value)}
        css={inputStyle}
        placeholder="Search by name"
      />
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th onClick={sortByAge}>
              age {isSortedAsc ? "▲" : "▼"}
            </th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {people
            .filter(({ name }) => name.includes(search))
            .map(({ name, age }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  <button onClick={() => tdUpdate(index)} css={buttonStyle}>
                    수정
                  </button>
                </td>
                <td>
                  <button onClick={() => tdDelete(index)} css={buttonStyle}>
                    삭제
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Person;
