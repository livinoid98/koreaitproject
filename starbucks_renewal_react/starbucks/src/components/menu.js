import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './menu.scss'

export default class menu extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="menu_header_wrap">
                    <header>
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
                        <div className="menu_main_text">
                            <span>COFFEE</span>
                            <p>산뜻하고 완벽한 커피</p>
                        </div>
                    </header>
                </div>
                <div className="menu_tab">
                    <ul className="clearfix">
                        <li>전체</li>
                        <li>콜드브루</li>
                        <li>브루드커피</li>
                        <li>에스프레소</li>
                        <li>프라푸치노</li>
                        <li>블렌디드</li>
                        <li>스타벅스피지오</li>
                        <li>티(티바나)</li>
                        <li>기타 제조 음료</li>
                    </ul>
                </div>

                <div className="main_menu">
                    <h3>New & 콜드 브루 커피</h3>
                    <div className="beav_wrap clearfix">
                        <Link to="product"><div className="beav">
                            <img src="./img/beav1.png" alt=""/>
                            <img src="./img/beav_text_1.png" alt=""/>
                        </div></Link>
                        <div className="beav">
                            <img src="./img/beav2.png" alt=""/>
                            <img src="./img/beav_text_2.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav3.png" alt=""/>
                            <img src="./img/beav_text_3.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav4.png" alt=""/>
                            <img src="./img/beav_text_4.png" alt=""/>
                        </div>
                    </div>
                    <div className="beav_wrap clearfix">
                        <div className="beav">
                            <img src="./img/beav5.png" alt=""/>
                            <img src="./img/beav_text_5.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav6.png" alt=""/>
                            <img src="./img/beav_text_6.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav7.png" alt=""/>
                            <img src="./img/beav_text_7.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav8.png" alt=""/>
                            <img src="./img/beav_text_8.png" alt=""/>
                        </div>
                    </div>
                    <div className="beav_wrap clearfix">
                        <div className="beav">
                            <img src="./img/beav9.png" alt=""/>
                            <img src="./img/beav_text_9.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav10.png" alt=""/>
                            <img src="./img/beav_text_10.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav11.png" alt=""/>
                            <img src="./img/beav_text_11.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="main_menu">
                    <h3>부르드 커피 & 에스프레소</h3>
                    <div className="beav_wrap clearfix">
                        <div className="beav">
                            <img src="./img/beav13.png" alt=""/>
                            <img src="./img/beav_text_13.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav14.png" alt=""/>
                            <img src="./img/beav_text_14.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav15.png" alt=""/>
                            <img src="./img/beav_text_15.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav16.png" alt=""/>
                            <img src="./img/beav_text_16.png" alt=""/>
                        </div>
                    </div>
                    <div className="beav_wrap clearfix">
                        <div className="beav">
                            <img src="./img/beav17.png" alt=""/>
                            <img src="./img/beav_text_17.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav18.png" alt=""/>
                            <img src="./img/beav_text_18.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav19.png" alt=""/>
                            <img src="./img/beav_text_19.png" alt=""/>
                        </div>
                        <div className="beav">
                            <img src="./img/beav20.png" alt=""/>
                            <img src="./img/beav_text_20.png" alt=""/>
                        </div>
                    </div>
                </div>
                <footer className="menu_footer">
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
