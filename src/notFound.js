import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="cover-container d-flex p-5 text-center my-5 flex-column justify-content-center">
      <p className="my-3"><img src="./matilda.png" width="128"></img></p>
      <h1 className="my-3">페이지를 찾을 수 없어요!</h1>
      <p className="lead my-3">페이지를 찾지 못 했어요 ㅠㅠ 아무래도 url이 잘못된 것 같습니다!<br />url을 다시 확인해보시고, 다시 한 번 시도해보세요!</p>
      <p className="lead my-3">
        <Link to="/" className="btn btn-lg btn-secondary fw-bold border-dark bg-dark text-white">Home</Link>
      </p>
    </main>
  );
}