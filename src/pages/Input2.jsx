/* eslint-disable no-unused-vars */
import React, {useState} from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    })

    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        
        //  input[id] = value;  다음과 같이 수정할 수 있겠지만 그렇게 하면 리엑트는 값이 변경된것을 모른다.
        setInputs({
            ...inputs,
            [id]: value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="name" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange} />
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    );
}

export default Input2;