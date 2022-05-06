//navigate를 제외한 나머지 임포트는 디버그용으로 사용하는 버튼임
export const Footer = () => {
  const debug = async () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <footer className="text-muted text-center py-5">
      <div className="container">
        <p className="float mb-3">
          <button className="btn btn-link link-dark" onClick={() => { debug(); }}>Back to top</button>
        </p>
        <p className="mb-1">Develop by Mindul-Mendul</p>
        <p className="mb-0">Copyright ©2022 by Mindul-Mendul. All Rights Reserved.</p>
      </div>
    </footer>
  );
}