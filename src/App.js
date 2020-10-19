import React from 'react';

//application에서 Food component로 보낸 모든속성을 가져와서, Food comonent의 argument로 속성을 넣는다.
//props object내부에는 fav가 있다.
//props.fav => {fav}와 동일하다. (ES6)
function Food({name, picture}){
  return <div>
    <h2>I Like {name}</h2>
    <img src={picture} />
</div>}

const foodILike = [
  {name : "kimchi", 
   image : "https://steemitimages.com/DQmUCKzQx9R5UTHwm91PwyUv236V1SJeJXFaN8C5sJW4GEM/2c77e779b5a5caa8d129a105a34e677a093927.jpg"
  },
  {name : "Samgyeopsal", 
   image : "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg"
  },
  {name : "Bibimbap", 
   image : "http://cfile209.uf.daum.net/image/273F6A4A525360691E7708"
  },
  {name : "Doncasu", 
   image : "https://t1.daumcdn.net/cfile/tistory/2447A13E5897CF372A"
  },
  {name : "kimbap", 
   image : "http://img.etoday.co.kr/pto_db/2017/06/20170630053248_1088097_710_340.jpg"
  },
]

function renderFood(dish){
  return <Food name = {dish.name} picture = {dish.image} />
}
//component : HTML을 반환하는 함수.
//application에서 Food component에게 fav라는 이름의 prop(property)를 kimchi라는 value로 주었다.
//react magic을 이용해 props 사용. 
//react magic에서 react는 우리가 전달한 props를 가져가는 일을 한다.
function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
