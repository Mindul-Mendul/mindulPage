import mindulImage from "./mindul.png";
export const Main = () => {
	return (
		<main>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-white">
				<div className="col-md-5 p-lg-5 mx-auto my-auto">
          <img src={mindulImage} width="70%" height="70%" />
          <h1 className="display-4 fw-normal">민둘이의 홈페이지</h1>
					<p className="lead fw-normal">민둘봇을 만들고 있어요! 지금은 저의 개발 능력이 부족하지만, 최대한 좋은 기능들을 많이 만드는 게 목표에요!</p>
					<a className="btn btn-outline-secondary" href="#">그냥 버튼</a>
				</div>
				<div className="product-device shadow-sm d-none d-md-block"></div>
				<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
			</div>
		</main>
	);
}