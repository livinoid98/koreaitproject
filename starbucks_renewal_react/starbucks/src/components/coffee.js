import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './coffee.scss'

export default class coffee extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="coffee_header_wrap">
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
                        <div className="coffee_main_text">
                            <span>COFFEE</span>
                            <p>한 잔의 완벽한 커피</p>
                        </div>
                    </header>
                </div>
                <div className="coffee_tab">
                    <ul className="clearfix">
                        <li>나와 어울리는 커피</li>
                        <li>스타벅스 리저브 매장</li>
                        <li>원두 이야기</li>
                        <li>스타벅스 원두</li>
                        <li>최상의 원두를 즐기는 법</li>
                    </ul>
                </div>
                <div className="choice clearfix">
                    <img src="./img/choice_main_text.png" alt=""/>
                    <button>START</button>
                </div>
                <div className="blend">
                    <img src="./img/blend_title.png" alt=""/>
                    <img src="./img/coffee_blend.png" alt=""/>
                    <img src="./img/bean_up1_img.png" alt=""/>
                    <img src="./img/design_story_text.png" alt=""/>
                    <img src="./img/bean_up2_img.png" alt=""/>
                    <img src="./img/tasting_note_text.png" alt=""/>
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
