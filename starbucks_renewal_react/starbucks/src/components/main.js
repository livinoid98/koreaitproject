import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './main.scss'

export default class Main extends Component {
    render() {
        return (
            <div className="wrap">
                <header className="clearfix">
                    <div className="logo">
                        <h1><Link to="/"><img src="./img/logo.png" alt=""/></Link></h1>
                    </div>
                    <ul className="clearfix">
                        <h2><Link to="/coffee"><li>COFFEE</li></Link></h2>
                        <h2><Link to="/menu"><li>MENU</li></Link></h2>
                        <h2><Link to="/store"><li>STORE</li></Link></h2>
                        <h2><Link to="/responsibility"><li>RESPONSIBILITY</li></Link></h2>
                        <h2><Link to="/rewards"><li>REWARDS</li></Link></h2>
                        <h2><Link to="/partnership"><li>PARTNERSHIP</li></Link></h2>
                    </ul>
                    <ul className="clearfix">
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                    <div className="circle">
                        <img src="./img/circle.png" alt=""/>
                    </div>
                    <div className="happiest">
                        <span>The happiest hour of the year</span>
                    </div>
                </header>

                <div className="main clearfix">
                    <div className="bean">
                        <img src="./img/bean.png" alt=""/>
                        <div className="bean_text">
                            <span>STARBUCKS RESERVE</span><br/>
                            <span>NEW ARRIVAL</span>
                            <p>당신의 하루에 보내는 향긋한 찬사</p>
                            <p>썬 드라이드 에티오피아<br/> 예가체프 첼렐렉투<span className="small">를 소개합니다.</span></p>
                        </div>
                    </div>
                    <div className="membership">
                        <div className="membership_text">
                            <span>Membership</span>
                            <p>멤버십 카드를 사용하시면 특별한 혜택을 누릴 수 있습니다.</p>
                        </div>
                        <img src="./img/card.png" alt=""/>
                    </div>
                    <div className="find">
                        <img src="./img/store.png" alt=""/>
                        <div className="find_text">
                            <span>스타벅스 매장찾기</span>
                            <p>가장 가까운 스타벅스 매장을 확인해보세요</p>
                            <p>차별화된 커피 경험을 누릴 수 있는 <span className="bold">리저브 매장</span><br/>다양한 방법으로 편리하게 즐길 수 있는 <span className="bold">드라이브 스루 매장</span><br/>함께해서 더 따뜻할 수 있는 지역사회 소통 공간 <span className="bold">커뮤니티 매장</span></p>
                        </div>
                    </div>
                </div>

                <div className="product_wrap">
                    <div className="content_wrap clearfix">
                        <div className="contents">
                            <span>스타벅스의 고객들을 위한 품격 있는 상품</span>
                            <p>회원 가입 후, 스타벅스 e-Gift Card를 <span className="em">"나에게 선물하기"</span>로 <span className="em">구매하시고, 편리하게 등록하세요!</span></p>
                            <button>상품발주서</button>
                            <button>신규 입점 제의</button>
                        </div>
                        <img src="./img/card_bottom.png" alt=""/>
                    </div>
                </div>

                <div className="best_wrap">
                    <div className="content">
                        <img src="./img/best.png" alt=""/>
                        <img src="./img/beav_main.png" alt=""/>
                        <img src="./img/golden_text.png" alt=""/>
                        <img src="./img/beav_sub1.png" alt=""/>
                        <img src="./img/beav_sub2.png" alt=""/>
                    </div>
                </div>

                <div className="responsive">
                    <div className="contents">
                        <img src="./img/company_text1.png" alt=""/>
                        <img src="./img/arrow_left_up.png" alt=""/>
                        <img src="./img/reserve_store.png" alt=""/>
                        <img src="./img/arrow_right_down.png" alt=""/>
                        <img src="./img/company_text2.png" alt=""/>
                    </div>
                </div>

                <footer>
                    <div className="footer_wrap clearfix">
                        <Link to="/"><img src="./img/footer_logo.png" alt=""/></Link>
                        <ul className="clearfix">
                            <li>COMPANY</li>
                            <li>CORPORATE SALES</li>
                            <li>PARTNERSHIP</li>
                            <li>ONLINE COMMUNITY</li>
                            <li>RECRUIT</li>
                        </ul>
                        <div className="footer_text">
                            <p>사업자등록번호 : 201-81-21515 (주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭 TEL : 02) 3015-1100 개인정보 책임자 : 양종환
                                ⓒ 2020 Starbucks Coffee Company. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
