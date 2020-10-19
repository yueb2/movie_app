import React from 'react';

//application에서 Food component로 보낸 모든속성을 가져와서, Food comonent의 argument로 속성을 넣는다.
//props object내부에는 fav가 있다.
//props.fav => {fav}와 동일하다. (ES6)
function Food({fav}){
  return <h1>I Like {fav}</h1>
}
//component : HTML을 반환하는 함수.
//application에서 Food component에게 fav라는 이름의 prop(property)를 kimchi라는 value로 주었다.
//react magic을 이용해 props 사용. 
//react magic에서 react는 우리가 전달한 props를 가져가는 일을 한다.
function App() {
  return (
    <div>
      <h1>hi!!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
