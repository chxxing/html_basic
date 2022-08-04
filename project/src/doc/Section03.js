const Section03 = () => {
    return (
        <section className="business02 basicSection">
            <h2><span>OUR</span> BUSINESS</h2>
            <p>뫄뫄회사의 다양한 사업영역을 소개합니다.</p>
            <div className="container">
                <div className="left">
                    <figure>
                        <img src="./img/hd01.jpg" alt="" />
                    </figure>
                </div>
                <div className="right">
                    <h3>심플하지만 다 갖춘 뫄뫄회사</h3>
                    <p>홈페이지 제작관련 궁금하신 사항은 언제든지 문의바랍니다.</p>

                    <ul className="dotList">
                        <li>심플하지만 다 갖춘 인덱스</li>
                        <li>PC + 모바일 반응형 디자인</li>
                        <li>홈페이지에 꼭 필요한 기본 디자인</li>
                        <li>제품전용 게시판</li>
                        <li>부트스트랩이 아닌 CSS기반 반응형</li>
                    </ul>

                    <div className="bottom">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores odio saepe velit porro rem
                        expedita ea, ipsam eos officia amet iste blanditiis, nobis, esse inventore!
                    </div>
                </div>
            </div>
            <div className="inner">
                <h3>심플하지만 다 갖춘 뫄뫄회사</h3>
                <ul className="row">
                    <li data-num="01">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, tenetur.
                    </li>
                    <li data-num="02">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, tenetur.</li>
                    <li data-num="03">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, tenetur.</li>
                    <li data-num="04">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, tenetur.</li>
                </ul>
            </div>
        </section>
    )
}

export default Section03;