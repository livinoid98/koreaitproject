import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Main from './components/main'
import Coffee from './components/coffee'
import Menu from './components/menu'
import Store from './components/store'
import Rewards from './components/rewards'
import Product from './components/product'

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/coffee" component={Coffee}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/store" component={Store}/>
                <Route path="/rewards" component={Rewards}/>
                <Route path="/product" component={Product}/>
            </div>
        )
    }
}
