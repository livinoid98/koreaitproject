import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profile from './Profile'
import HistorySample from './HistorySample'

export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/about">소개</Link>
                    </li>
                    <li>
                        <Link to="/profile/velopert">velopert 프로필</Link>
                    </li>
                    <li>
                        <Link to="/profile/gildong">gildong 프로필</Link>
                    </li>
                    <li>
                        <Link to="/history">History 예제</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/about" component={About}/>
                    <Route path="/profile/:username" component={Profile}/>
                    <Route path="/history" component={HistorySample}/>
                </Switch>
            </div>
        )
    }
}
