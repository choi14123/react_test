
const Cal = ()=>{

  var result = 0;
  function myFunction1() {
    var num = document.getElementById('num');
  result += num;
  return console.log(num);
  }
  function myFunction2() {
    var num = document.getElementById('num');
  result -= num;
  return console.log(num);
  }
  
  function myFunction3() {
    var num = document.getElementById('num');
  result /= num;
  return console.log(num);
  }
  
  function myFunction4() {
    var num = document.getElementById('num');
  result *= num;
  return console.log(num);
  }
  
  
  return <div>
     <input type="text" id ="num" placeholder="숫자를 입력하세요."></input>
     <button onclick="{myFunction1()}">더하기</button>
     <button onclick="myFunction2()">빼기</button>
     <button onclick="myFunction3()">나누기</button>
     <button onclick="myFunction4()">곱하기</button>
  </div>
  };
  
  
  export default Cal;