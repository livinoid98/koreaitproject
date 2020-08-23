import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './product.scss'

export default class product extends Component {
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
                <div className="product_main clearfix">
                    <div className="product_image">
                        <img src="./img/happy_cheese_white_mocha.png" alt=""/>
                    </div>
                    <div className="product_info">
                        <div className="category">
                            <span>Home > Menu > New & Cold Brew > 해피 치즈 화이트 모카</span>
                        </div>
                        <h3>해피 치즈 화이트 모카</h3>
                        <span>Happy Cheese White Mocha</span>
                        <img src="./img/rectangle.png" alt=""/>
                        <p>단짠단짠 크림치즈 휘핑에 행운 메시지 토핑을 올린<br/>뉴이어 한정음료입니다.
                            <br/>새해의 행운 메시지를 지금 확인하세요!
                        </p>
                        <table>
                            <tr>
                                <td>제품 영양정보</td>
                                <td>Tall(톨) / 355ml (12 fl oz)</td>
                            </tr>
                            <tr>
                                <td>1회 제공량 (Kcal)</td>
                                <td>325</td>
                                <td>나트륨 (mg)</td>
                                <td>230</td>
                            </tr>
                            <tr>
                                <td>포화지방 (g)</td>
                                <td>19</td>
                                <td>당류 (g)</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>단백질 (g)</td>
                                <td>12</td>
                                <td>카페인 (mg)</td>
                                <td>75</td>
                            </tr>
                        </table>
                        <div className="allergy">
                            <span>알레르기 유발요인 : 대두 / 우유</span>
                        </div>
                        <button>HOT</button>
                        <button>COLD</button>
                        <button>메뉴보기</button>
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
