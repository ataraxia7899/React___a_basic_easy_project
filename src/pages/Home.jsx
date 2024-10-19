//함수형 컴포넌트       최근에는 함수형 컴포넌트를 이용한 개발이 자주 이루어짐.
/* eslint-disable no-unused-vars */
import React from "react";

function Home() {
    return <h1>Home 화면입니다.</h1>;
}

export default Home;


/* class형 컴포넌트

import React, {Component} from "react";

class Home extends Component{           //import 시킨 컴포넌트를 상속받는다.
    render() {
        return <h1>Home 화면입니다.</h1>;
    }
}

export default Home;

*/