import "./Main.css"

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (if문 for문 사용 불가)
// 2. 숫자, 문자열, 배열 값만 랜더링 된다.
// 3. 모든 태그는 닫아야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
  const user = {
    name: "박지원",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
