import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//<App /> : component라고 부른다. React는 component와 함께 동작하고, 모든것은 component이다.
//react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다. javascript와 HTML사이의 이러한 조합을 jsx라고 부른다.
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
