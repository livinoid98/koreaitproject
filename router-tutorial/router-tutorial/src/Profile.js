import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props);
        console.log(props.match);
        this.state = {
            velopert:{
                name:'김민준',
                description:'리액트를 좋아하는 개발자'
            },
            gildong:{
                name:'홍길동',
                description:'고전 소설 홍길동전의 주인공'
            }
        }
    }
    render() {
        const {username} = this.props.match.params;
        const profile = this.state[username];
        if(!profile){
            return <div>존재하지 않는 사용자입니다.</div>
        }
        return (
            <div>
                <h3>{username}({profile.name})</h3>
                <p>{profile.description}</p>
            </div>
        )
    }
}
















/* import React, { Component } from 'react'

const data = {
    velopert:{
        name:'김민준',
        description:'리액트를 좋아하는 개발자'
    },
    gildong:{
        name:'홍길동',
        description:'고전 소설 홍길동전의 주인공'
    }
}

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile; */