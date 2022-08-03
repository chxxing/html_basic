import '../css/section01.css';

const Section01 = () => {
    return (
        <section className="about">
            <h2><span className="mainColor">CEO'S</span> GREETINGS</h2>
            <p>새로운 미래를 열어가는 뫄뫄회사</p>
            <div className="container">
                <div className="des">
                    <p className="tit">
                        웹 서비스의 <span className="mainColor">새로운 미래</span> <br />
                        <span className="mainColor">뫄뫄회사</span>가 만들어 가겠습니다.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Dolor omnis voluptatibus in facere
                        harum incidunt perspiciatis repellendus. Animi, esse doloribus?
                    </p>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
                        Id error rerum doloremque voluptas. Est,
                        accusantium?</p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                        Aut iusto eligendi qui illo rem! Ipsa,
                        id quasi.
                    </p>

                    <p>뫄뫄회사 임직원 일동</p>
                </div>
                <figure>
                    <img src="./img/hd01.jpg" alt=""></img>
                </figure>
            </div>
            <div className="inner">
                <h3>주요현황</h3>
                <div className="responsive_table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>주 소</th>
                                <td>부산시 동래구 사직동 1234-56 쌍둥이 돼지국밥 옆</td>
                                <th>전화번호</th>
                                <td>051-783-2317</td>
                            </tr>
                            <tr>
                                <th>주 소</th>
                                <td>부산시 동래구 사직동 1234-56 쌍둥이 돼지국밥 옆</td>
                                <th>전화번호</th>
                                <td>051-783-2317</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Section01;