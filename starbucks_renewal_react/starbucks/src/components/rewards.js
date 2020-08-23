import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './rewards.scss'

export default class rewards extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="rewards_header_wrap">
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
                        <div className="rewards_main_text">
                            <span>REWARDS</span>
                            <p>함께하는 더욱 완벽한 커피</p>
                        </div>
                    </header>
                </div>
                <div className="rewards_tab">
                    <ul className="clearfix">
                        <li>마이 스타벅스 리워드</li>
                        <li>스타벅스 카드</li>
                        <li>스타벅스 e-Gift-Card</li>
                    </ul>
                </div>
                <div className="app_wrap">
                    <div className="app">
                        <img src="./img/starbucks_app.png" alt=""/>
                        <img src="./img/app_text.png" alt=""/>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className="rank_wrap">
                    <div className="rank">
                        <div className="my_rewards">
                            <img src="./img/my_rewards.png" alt=""/>
                        </div>
                        <div className="my_rank clearfix">
                            <div className="image_box">
                                <img src="./img/starbucks_cup_illust.png" alt=""/>
                                <img src="./img/welcome_star.png" alt=""/>
                                <img src="./img/welcome_text.png" alt=""/>
                            </div>
                            <div className="contents">
                                <div className="benefit">
                                    <img src="./img/icon1.png" alt=""/>
                                    <img src="./img/icon_text_1.png" alt=""/>
                                </div>
                                <div className="benefit">
                                    <img src="./img/icon2.png" alt=""/>
                                    <img src="./img/icon_text_2.png" alt=""/>
                                </div>
                                <div className="benefit">
                                    <img src="./img/icon3.png" alt=""/>
                                    <img src="./img/icon_text_3.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rank">
                        <div className="my_rank clearfix">
                            <div className="image_box">
                                <img src="./img/starbucks_cup_illust.png" alt=""/>
                                <img src="./img/green_star.png" alt=""/>
                                <img src="./img/green_text.png" alt=""/>
                            </div>
                            <div className="contents">
                                <div className="benefit">
                                    <img src="./img/icon4.png" alt=""/>
                                    <img src="./img/icon_text_4.png" alt=""/>
                                </div>
                                <div className="benefit">
                                    <img src="./img/icon5.png" alt=""/>
                                    <img src="./img/icon_text_5.png" alt=""/>
                                </div>
                                <div className="benefit">
                                    <img src="./img/icon6.png" alt=""/>
                                    <img src="./img/icon_text_6.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rank">
                        <div className="my_rank clearfix">
                            <div className="image_box">
                                <img src="./img/starbucks_cup_illust.png" alt=""/>
                                <img src="./img/gold_star.png" alt=""/>
                                <img src="./img/gold_text.png" alt=""/>
                            </div>
                            <div className="contents">
                                <div className="benefit">
                                    <img src="./img/icon7.png" alt=""/>
                                    <img src="./img/icon_text_7.png" alt=""/>
                                </div>
                                <div className="benefit">
                                    <img src="./img/icon8.png" alt=""/>
                                    <img src="./img/icon_text_8.png" alt=""/>
                                </div>
                                <div className="benefit">
                                    <img src="./img/icon9.png" alt=""/>
                                    <img src="./img/icon_text_9.png" alt=""/>
                                </div>
                            </div>
                        </div>
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
