import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './store.scss'

export default class store extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="store_header_wrap">
                    <header>
                        <div className="logo">
                            <h1><Link to="/"><img src="./img/logo.png" alt=""/></Link></h1>
                        </div>
                        <ul className="clearfix cc">
                            <h2><Link to="/coffee"><li>COFFEE</li></Link></h2>
                            <h2><Link to="/menu"><li>MENU</li></Link></h2>
                            <h2><Link to="/store"><li>STORE</li></Link></h2>
                            <h2><Link to="/responsibility"><li>RESPONSIBILITY</li></Link></h2>
                            <h2><Link to="/rewards"><li>REWARDS</li></Link></h2>
                            <h2><Link to="/partnership"><li>PARTNERSHIP</li></Link></h2>
                        </ul>
                        <ul className="clearfix cc">
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                        <div className="store_main_text">
                            <span>STORE</span>
                            <p>찾아가는 완벽한 커피</p>
                        </div>
                    </header>
                </div>
                <div className="store_tab">
                    <ul className="clearfix">
                        <li>드라이브 스루 매장</li>
                        <li>스타벅스 리저브 매장</li>
                        <li>커뮤니티 스토어 매장</li>
                        <li>프리미어 푸드 서비스 스토어</li>
                    </ul>
                </div>
                <div className="store_main">
                    <div className="store_slide">
                        <img src="./img/store_circle.png" alt=""/>
                        <img src="./img/drive_thru_text.png" alt=""/>
                    </div>
                </div>
                <div className="store_how_to">
                    <h3>Drive Thru 매장 이용방법</h3>
                    <div className="drive_road">
                        <img src="./img/store2.png" alt=""/>
                        <img src="./img/road.png" alt=""/>
                        <img src="./img/car.png" alt=""/>
                        <img src="./img/step1.png" alt=""/>
                        <img src="./img/step2.png" alt=""/>
                        <img src="./img/how_to.png" alt=""/>
                        <img src="./img/store3.png" alt=""/>
                    </div>
                    <div className="drive_text">
                        <img src="./img/drive_thru_text1.png" alt=""/>
                        <img src="./img/drive_thru_text2.png" alt=""/>
                    </div>
                </div>
                <footer className="store_footer">
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
