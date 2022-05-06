export const Mindul = () => {
	return (
    <main>
        <h1><a href="index.html">민둘봇</a></h1>

        <div id="navBar">
            <a class="navMenu" href="index.html"><div><strong>홈페이지</strong></div></a>
            <a class="navMenu" href="mindulbot.html"><div><strong>민둘봇</strong></div></a>
        </div>

        <div id="grid">
            <div id="메뉴">
                <ul>
                    <li class="menu">
                        <strong><a href="mindulbot.html">공지사항</a></strong>
                        <ul>
                            <li>공지사항</li>
                            <li>업데이트</li>
                        </ul>
                    </li>
                    <li class="menu">
                        <strong><a href="mindulbot.html">기능 설명</a></strong>
                        <ul>
                            <li>기본 기능</li>
                            <li>노래 기능</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div id="본문">
                <p>
                    민둘봇은 디스코드 봇이에요.<br/>
                    노래도 부르고 타로도 본답니다!<br/>
                    <img src="mindul.png" width="40%" height="40%"/>
                </p>
            </div>
        </div>
    </main>
    );
};