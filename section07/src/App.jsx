import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input , setInput] = useState("")

  const isMount = useRef(false)

  // 라이프 사이클
  // 1. 마운트: 탄생 
  useEffect(()=>{
    console.log("마운트")
  },[])
  // 2. 업데이트: 변화, 리랜더링 
  useEffect(()=>{
    // 진짜 컴포넌트가 업데이트 되었을 때만 실행
    if(!isMount.current){
      isMount.current = true
      return
    }
    console.log("업데이트")
  })
  // 3. 언마운트: 죽음

  // 배열이 바뀌게 되면, 콜백 함수가 실행된다. (의존성 배열 혹은 deps라고 부름)
  // useEffect(()=>{}, [])


  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value)
        }}></input>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0  ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
