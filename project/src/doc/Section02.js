import '../css/section02.css';

const Section02 = () => {
    return (
        <section className="business">
            <h2><span className="mainColor">OUR</span> BUSINESS</h2>
            <p>뫄뫄회사의 다양한 사업영역을 소개합니다.</p>
            <div className="container">
                <figure>
                    <div className="inbox">
                        <img src="./img/hd01.jpg" alt=""></img>
                    </div>
                    <div className="cover">
                        <h3>주요사업1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, temporibus.</p>

                        <a href="">more more more</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="./img/hd02.jpg" alt=""></img>
                    </div>
                    <div className="cover">
                        <h3>주요사업2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, temporibus.</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="./img/hd03.jpg" alt=""></img>
                    </div>
                    <div className="cover">
                        <h3>주요사업3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolorum ea dolor commodi modi
                            optio blanditiis, cupiditate mollitia magni at?</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="./img/hd04.jpg" alt=""></img>
                    </div>
                    <div className="cover">
                        <h3>주요사업4</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, temporibus.</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
            </div>
            <div className="inner">
                <div className="tit">
                    <strong>심플하지만 다 갖춘 회사</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate?</p>
                </div>
                <div className="list">
                    <ul className="dotList">
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum fugit eligendi aperiam
                            numquam tempore beatae ipsum voluptates accusamus repudiandae!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Section02;