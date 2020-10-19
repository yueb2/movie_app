import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    ID: 1,
    name: "kimchi",
    image:
      "https://steemitimages.com/DQmUCKzQx9R5UTHwm91PwyUv236V1SJeJXFaN8C5sJW4GEM/2c77e779b5a5caa8d129a105a34e677a093927.jpg",
    rating: 5,
  },
  {
    ID: 2,
    name: "Samgyeopsal",
    image:
      "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 4.9,
  },
  {
    ID: 3,
    name: "Bibimbap",
    image: "http://cfile209.uf.daum.net/image/273F6A4A525360691E7708",
    rating: 4.8,
  },
  {
    ID: 4,
    name: "Doncasu",
    image: "https://t1.daumcdn.net/cfile/tistory/2447A13E5897CF372A",
    rating: 3.5,
  },
  {
    ID: 5,
    name: "kimbap",
    image:
      "http://img.etoday.co.kr/pto_db/2017/06/20170630053248_1088097_710_340.jpg",
    rating: 4.7,
  },
];

//application에서 Food component로 보낸 모든속성을 가져와서, Food comonent의 argument로 속성을 넣는다.
//props object내부에는 fav가 있다.
//props.fav => {fav}와 동일하다. (ES6)
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

//check props
//만약 isReuired를 써주지 않는다면, undefined도 포함하여 에러가 나지 않는다..
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

//component : HTML을 반환하는 함수.
//application에서 Food component에게 fav라는 이름의 prop(property)를 kimchi라는 value로 주었다.
//react magic을 이용해 props 사용.
//react magic에서 react는 우리가 전달한 props를 가져가는 일을 한다.
//key는 기본적으로 react내부에서 사용하기 위한 것이다.
function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.ID}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
