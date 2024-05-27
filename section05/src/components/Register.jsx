import { useRef, useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0)
  const inputRef = useRef()

  const onChange =(e) => {
    countRef.current ++
    console.log(countRef.current)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소의 Focus
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} placeholder="이름" onChange={onChange} />
      </div>
      <div>
        <input name="birth" value={input.birth} placeholder="생년월일" type="date" onChange={onChange} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">대한민국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} placeholder="자기소개" onChange={onChange}></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
